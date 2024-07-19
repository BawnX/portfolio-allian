import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { contentSecurityPolicyHeader } from './app/utils/headers';

export function middleware(request: NextRequest) {
  let response = NextResponse.next();

  response = contentSecurityPolicyHeader(response);

  // Anti-clickjacking header
  response.headers.set('X-Frame-Options', 'DENY');

  // Permissions Policy
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Remove X-Powered-By header
  response.headers.delete('X-Powered-By');

  // X-Content-Type-Options header
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Sec-Fetch headers
  response.headers.set('Sec-Fetch-Dest', 'document');
  response.headers.set('Sec-Fetch-Mode', 'navigate');
  response.headers.set('Sec-Fetch-Site', 'same-origin');
  response.headers.set('Sec-Fetch-User', '?1');
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
