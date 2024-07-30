const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.auth = async (req, resp, next) => {
    try {
        // 1st way to fetch token

        const token = req.body.token;
        if (!token) {
            return resp.status(400).json({
                success: false,
                message: 'token missing.....'
            })
        }
        // verify token 
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload)
            req.user = payload;
        }
        catch (error) {
            resp.status(401).json({
                success: false,
                message: 'Token Invailid.....'
            })
        }
        next();

    }
    catch (error) {
        return resp.status(401).json({
            success: false,
            message: 'Something went wrong while verifying token'
        })
    }


}


exports.isStudent = async (req, resp, next) => {
    try {
        if (req.user.role !== "Student") {
            return resp.status(401).json({
                success: false,
                message: 'this is a protected route for Student'
            })
        }
        next();
    }
    catch (error) {
        resp.status(500).json({
            success: false,
            message: 'user role not match.....'
        })
    }
}

exports.isAdmin = async (req, resp, next) => {
    try {
        if (req.user.role !== "Admin") {
            resp.status(400).json({
                success: false,
                message: 'this is a protected route for Admin'
            })
        }
        next();
    }
    catch (error) {
        return resp.status(500).json({
            success: false,
            message: 'user role not found...'
        })
    }
}