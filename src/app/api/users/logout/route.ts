//in logout, we will just clear out the token saved in browser cookie
import { NextResponse } from "next/server";

export async function GET(){
        try {
        //creating a response object of NextResponse, can interact with cookie
        const response=NextResponse.json({
           message:"Logout Successful",
            success:true
        }
        )
        //clearing the cookie
        response.cookies.set('token','',{httpOnly:true})
        return response;
    }
       
    catch (error:any) {
       return NextResponse.json(
        {error:error.message},
        {status:500}
    )        
    }
}