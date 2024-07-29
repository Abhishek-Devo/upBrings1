import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();

        // Destructuring
        const { username, email, password } = reqBody;
        console.log('Request Body:', reqBody);

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            console.log('User already exists');
            return NextResponse.json({ error: 'User already exists' }, { status: 404 });
        }
        //if new user wants to signup 

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create new user
        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();
        console.log('User successfully created:', savedUser);

        return NextResponse.json({
            message: 'User successfully created',
            success: true, savedUser
        });
    }
    catch (error: any) {
        console.error('Error during signup:', error);
        return NextResponse.json(
            { message: error.message },
            { status: 400 });
    }
}
