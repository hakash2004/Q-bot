import connectMongoDb from "../../../../libs/mongodb";
import User from "../../../../model/login";
import {NextResponse} from "next/server";
import bcrypt from 'bcrypt';

export async function POST(request){
    try {
        const { userName, email, password } = await request.json();
        if (!userName || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        await connectMongoDb();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "Email already in use" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({ userName, email, password: hashedPassword });
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });

    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }

}