import {Router, Request, Response, NextFunction} from 'express'
import bcrypt from 'bcrypt';
import { IUser, UserModel } from '../models/user';
import { UserErrors } from '../errors';
import jwt from 'jsonwebtoken'
import { verify } from 'crypto';

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
    const {email, password, name} = req.body;

    try{
        const user = await UserModel.findOne({email}); // ({emial : email})

        if(user){ // if user != null, user already exists
            return res.status(400).json({type: UserErrors.USERNAME_ALREADY_EXISTS})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ email, password: hashedPassword, name });
        await newUser.save();

        res.json({message: "User Registered Succesfully"});
    } catch(err){
        console.log(err);
        res.status(500).json({type: err});
    }



});


router.post("/login", async (req: Request , res: Response) => {
    const { email, password} = req.body;
    try{
        const user: IUser = await UserModel.findOne({email});

        if(!user){
            return res.status(400).json({type: UserErrors.NO_USER_FOUND})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(400).json({type: UserErrors.WRONG_CREDENTIALS});
        }

        const token = jwt.sign({id: user._id} , "secret");
        res.json({token, userID: user._id});

    }catch (err){
        res.status(500).json({type: err});
    }
});

export const verifyToken = (req: Request , res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if(authHeader){
        jwt.verify(authHeader, "secret", (err) => {
            if(err){
                return res.sendStatus(403);
            }

            next();
        })
    }
    res.sendStatus(401);
}; 

export{router as userRouter}

