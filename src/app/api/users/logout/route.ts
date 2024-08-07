import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Creating a response object of NextResponse to interact with cookies
    const response = NextResponse.json({
      message: "Logout Successful",
      success: true
    });
    
    // Clearing the cookie by setting an empty value and an immediate expiration date
    response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
