import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'

//method to connect with our mongoDB
connect()

//this post method in response will handle cookies too .
export async function POST(request:NextRequest){
    try {
        const reqBody= await request.json()
        const {email, password} = reqBody
        console.log(reqBody)
        
        //check user exist or not
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({message:'User not found'},{status:400})
        }
        //check password
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({message:'Invalid password'},{status:400})
        }
        //generate token data
        const tokenData={
            _id:user._id,
            email:user.email,
            username:user.name,
        }
        //generate token and set user cookie
        const token =await  jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' })
        const response =NextResponse.json({message:"Login successful",success:true})  
        response.cookies.set(
            "token",token,
            {httpOnly:true, 
    } )
    return response;
}
//in case login failed
    catch (error:any) {
       return NextResponse.json({error: error.message}, {status: 500})
        
    }
}
