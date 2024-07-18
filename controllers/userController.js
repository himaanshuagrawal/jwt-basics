import jwt from 'jsonwebtoken';
import 'dotenv/config';
import BadRequestError from "../errors/BadRequestError.js";

export const login = (req,res) => {
    console.log(req.body);
    const {username,password} = req.body;
    if(!username || !password){
        throw new BadRequestError("Please Provide Email and Password",400)
    }

    const id = new Date().getDate();
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'1d'});
    console.log(token);


    // res.send("Fake login/Register/Signup");
    res.status(200)
    .json({
        msg:"User Created",
        token
    });
}

export const dashboard = (req,res) =>{
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200)
    .json({
        msg:`Hello User ${req.user.username}`,
        secret:`Here is your key: ${luckyNumber}`
    });
}