import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware is triggered');
  
  // Get the user_token and userteam_token from cookies
  const userToken = request.cookies.get('user_token')?.value || null;
  const userTeamToken = request.cookies.get('userteam_token')?.value || null;
  
  // If neither token is present, redirect to the login page
  if (!userToken && !userTeamToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If the user is trying to access the reader profile page, validate user_token
  if (request.nextUrl.pathname.startsWith('/authenticated/reader-profile')) {
    if (!userToken) {
      // If no user_token, redirect to login (or other appropriate handling)
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If the user is trying to access the admin home page, validate userteam_token
  if (request.nextUrl.pathname.startsWith('/authenticated/admin/home')) {
    if (!userTeamToken) {
      // If no userteam_token, redirect to login (or other appropriate handling)
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If we have the correct token for the respective page, allow access
  return NextResponse.next();
}

export const config = {
  matcher: ['/authenticated/reader-profile', '/authenticated/admin/home'],
};