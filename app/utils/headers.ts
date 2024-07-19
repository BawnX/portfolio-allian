import { type NextResponse } from 'next/server';

export function contentSecurityPolicyHeader(response: NextResponse<unknown>) {
  response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:");
  return response;
}

export function antiClickjackingHeader(response: NextResponse<unknown>) {
  response.headers.set('X-Frame-Options', 'DENY');
  return response;
}

export function permissionsPolicyHeader(response: NextResponse<unknown>) {
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  return response;
}

export function xPoweredByHeader(response: NextResponse<unknown>) {
  response.headers.delete('X-Powered-By');
  return response;
}

export function xContentTypeOptionsHeader(response: NextResponse<unknown>) {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  return response;
}

export function secFetchHeader(response: NextResponse<unknown>) {
  response.headers.set('Sec-Fetch-Dest', 'document');
  response.headers.set('Sec-Fetch-Mode', 'navigate');
  response.headers.set('Sec-Fetch-Site', 'same-origin');
  response.headers.set('Sec-Fetch-User', '?1');
  return response;
}
