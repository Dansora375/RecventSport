import { Router, Request, Response } from "express";
import { IPost, PostModel } from "../models/post";
import { verifyToken } from "./user";
import { PostErrors } from "../errors";

const router = Router()

router.get("/posts", async(_, res: Response) =>{
    try{
        const posts = await PostModel.find({});
        res.json({posts});
    }catch(err){
        res.status(400).json({err})
    }
})


//implementar con token
router.post("/create_post", /*verifyToken,*/  async (req: Request , res: Response) => {
    const {title,image_url,description,place,level} = req.body;
    try{
        const post: IPost = await PostModel.findOne({title});

        if(post){
            return res.status(400).json({type: PostErrors.TITLE_ALREADY_EXISTS})
        }

        const currentDate = new Date();
        const newPost = new PostModel({ title, image_url, description, date:currentDate, place, level });

        await newPost.save();

        res.json({message: "Event Created"});

    }catch (err){
        res.status(500).json({type: err});
    }
});

export{router as postRouter}