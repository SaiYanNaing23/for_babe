import jwt from 'jsonwebtoken'
import { ENV_VARS } from '../configs/Env.js';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: '1d' });
    console.log(token);
    res.cookie('token', token, { 
        expires: new Date(Date.now() + 3600000),
        httpOnly: true, 
        sameSite: "strict",
        secure : ENV_VARS.NODE_ENV === "development"
    });
    return token;
}