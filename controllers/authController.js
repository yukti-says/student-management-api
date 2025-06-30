import * as AuthService from '../services/authService.js';

export const register = async (req, res) => {
    try {
        const user = await AuthService.registerUser(req.body);
        res.status(201).json({
            message: 'User registered successfully',
            user
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { token, user } = await AuthService.loginUser(req.body);
        res.status(200).json({
            message: 'User logged in successfully',
            token,
            user
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}