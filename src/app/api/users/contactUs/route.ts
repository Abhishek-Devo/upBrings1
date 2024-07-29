//as soon as someone visit feedback page,axios request will come here using button.

import feedback from '@/models/feedBack'
import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

import { getDataFromToken } from '@/helpers/getDataFromToken';

//method to connect with our mongoDB
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

export async function POST(request:NextRequest){
    try {       
        const reqBody = await request.json();
    
        // Destructuring
        const {username, email, message } = reqBody;
        console.log('Request Body:', reqBody);

        // Create new user feedback
        const newUserFeedBack = new feedback({username,email,message});
        console.log("new user feedback",newUserFeedBack)
        const savedUserFeedBack = await newUserFeedBack.save();

        console.log('User feedback submitted ', savedUserFeedBack);

        return NextResponse.json({
            message: 'User successfully created',
            success: true, savedUserFeedBack,
        });        
    } 
    catch (error:any) {
        console.log('error occurred'+error)
        return NextResponse.json(
            { message: error.message },
            { status: 400 });
            }    
}


