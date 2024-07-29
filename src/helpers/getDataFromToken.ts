//grab token data stored in browser

import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'

export const getDataFromToken=(request:NextRequest)=>{
    try {
        const token=request.cookies.get('token')?.value||'';
        console.log(" token value is ",token)
        //verify the token and extract data
        const decodedToken:any=jwt.verify(token,process.env.TOKEN_SECRET!)
        console.log("extracted data using jwt from token",decodedToken)
        console.log("getting user id from decoded token",decodedToken._id)
        return decodedToken._id;                
    } 
    catch (error:any) {
        throw new Error(error.message)        
    }
}