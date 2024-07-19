import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { antiClickjackingHeader, contentSecurityPolicyHeader, permissionsPolicyHeader, secFetchHeader, xContentTypeOptionsHeader, xPoweredByHeader } from './app/utils/headers';

export function middleware(request: NextRequest) {
  let response = NextResponse.next();

  response = contentSecurityPolicyHeader(response);
  response = antiClickjackingHeader(response);
  response = permissionsPolicyHeader(response);
  response = xPoweredByHeader(response);
  response = xContentTypeOptionsHeader(response);
  response = secFetchHeader(response);

  // Sec-Fetch headers

  return response;
}

export const config = {
  matcher: '/((?!api|_next/image|favicon.ico).*)',
};
