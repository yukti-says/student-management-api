import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const registerUser = async (
    {
        name,
        email,
        password,
        role
    }
) => {
    // check if user already there
    const existing = await User.findOne({ email });
    if (existing) throw new Error('User already exists');



    // now hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // now creating the user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    })

    // now returning the user
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    };

};

export const loginUser = async ({ email, password }) => {
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    // now match the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');
    
    // now generating the token
    const token = jwt.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
    
    // now returning the user and token
    return {
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        },
        token
        
    }
}