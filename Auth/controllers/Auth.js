const bcrypt = require('bcrypt');
const userSchema = require('../models/userSchema');
const { use } = require('../routes/user');
require('dotenv').config();
const jwt  =  require("jsonwebtoken");

exports.signup = async (req, resp) => {

    try {
        const { name, email, password, role } = req.body;
        const existUser = await userSchema.findOne({ email });

        // check user existing 

        if (existUser) {
            return resp.status(400).json({
                success: false,
                message: "User Alredy Exist"
            })
        }

        // password hashing 
        let passwordHashed;
        try {
            passwordHashed = await bcrypt.hash(password, 10);
        }
        catch {
            return resp.status(500).json({
                success: false,
                message: "Problem in Password Hashing"
            })
        }

        // create user entry 

        const user = await userSchema.create({
            name, email, password: passwordHashed, role
        })
        return resp.status(200).json({
            success: true,
            message: "Acount Created Successfully"
        })

    }
    catch {
        resp.status(500).json({
            success: false,
            message: "Please Try Again......"
        })
    }
}

// login 

exports.login = async (req, resp) => {
    try {
        const { email, password, } = req.body;

        if (!email || !password) {

            resp.status(400).json({
                success: false,
                message: "Please Fill All Details"
            })
        }

        // check register user 

        let user = await userSchema.findOne({ email })

        // if user exist 
        if (!user) {

            resp.status(401).json({
                success: false,
                message: "User not Register"
            })
        }
// console.log(user,">>>>>>>>")
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        };

        if (await bcrypt.compare(password, user.password)) {
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h"
            })


            user = user.toObject();
            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
            // resp.status(200).json({
            //     success: true,
            //     token,
            //     user,
            //     message: "User logged successfully"
            // });
            resp.cookie("firstcookies", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User logged successfully"
            });
        }
        else {
            return resp.status(403).json({
                success: false,
                message: "Password inccorect"
            })
        }

    }
    catch (error) {
        console.log(error)
        resp.status(500).json({
            success: false,
            message: "Login Faild"
        })
    }
}




// const bcrypt = require('bcrypt');
// const userSchema = require('../models/userSchema');

// exports.signup = async (req, resp) => {
//     try {
//         const { name, email, password, role } = req.body;
//         const existUser = await userSchema.findOne({ email });

//         if (existUser) {
//             return resp.status(400).json({
//                 success: false,
//                 message: "User alredy exit"
//             })
//         }

//         let hashedPassword;

//         try {
//             hashedPassword = await bcrypt.hash(password, 10);
//         }
//         catch {
//             return resp.status(500).json({
//                 success: false,
//                 message: "Issue in hashing"
//             })
//         }

//         // create user entry

//         const user = await userSchema.create({
//             name, email, password: hashedPassword, role
//         });

//         return resp.status(200).json({
//             success: true,
//             message: "user Created successful"
//         })
//     }
//     catch {
//         consolr.error(err)
//         return resp.status(500).json({
//             success: false,
//             message: "Please try again"
//         })
//     }

// }