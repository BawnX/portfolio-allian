import { type NextResponse } from 'next/server';

export function contentSecurityPolicyHeader(response: NextResponse<unknown>) {
  response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:");
}
