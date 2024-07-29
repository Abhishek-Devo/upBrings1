//as soon as someone visit profile route,axios request will come here

import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";
import User from '@/models/userModel'
import { connect } from "@/dbConfig/dbConfig";

//using token to extract user data
connect()
export async function GET(request:NextRequest){
    try {
        //returns id of the user
        const userID=await getDataFromToken(request)
        console.log("user id according to token ",userID)
        //find user by id
        const user=await User.findOne({"_id":userID}).select("-password");
        //if user is found then return user data
        console.log("user details",user)
        return NextResponse.json({message:"user found",data:user})                
    }
     catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
        
    }
}
