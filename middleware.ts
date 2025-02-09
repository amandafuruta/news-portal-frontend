import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('user_token')?.value || null;
  const userTeamToken = request.cookies.get('userteam_token')?.value || null;
  
  if (!userToken && !userTeamToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/authenticated/reader-profile')) {
    if (!userToken) {
      // If no user_token, redirect to login 
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If the user is trying to access the admin home page, validate userteam_token
  if (request.nextUrl.pathname.startsWith('/authenticated/admin/home')) {
    if (!userTeamToken) {
      // If no userteam_token, redirect to login 
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If we have the correct token for the respective page, allow access
  return NextResponse.next();
}

export const config = {
  matcher: ['/authenticated/reader-profile', '/authenticated/admin/home'],
};