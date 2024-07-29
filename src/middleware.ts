//this file contains logic to handle login and logout users.
//logout user can't access any route of our website if he tries he will be redirected to logIn page.
// already loggedIn user can't access our signIn and LogIn route he will be redirected to Home Page

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Logic part of the middleware
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Checking if the path is '/login' or '/signup' which should be accessible only to non-logged-in users
  const isPublicPath = path === '/login' || path === '/signup' || path=='/verifyemail';

  // Extracting token from cookies
  const token = request.cookies.get('token')?.value || ''

  if (isPublicPath && token) {
    // If the path is public and we have a token, redirect to the homepage as the user is already logged in
    return NextResponse.redirect(new URL('/home', request.nextUrl))
  }
  if (!isPublicPath && !token) {
    // If the path is not public and we don't have a token, redirect to the login page
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}

// Config to match specific paths
export const config = {
  matcher: [
    '/home',
    '/profile/:path*',
    '/login',
    '/signup',
    '/verifyemail',
    '/aboutUs',
    '/contactUs',
    '/donate', 
      
  ]
}
