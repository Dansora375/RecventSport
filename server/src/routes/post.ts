import { Router, Request, Response } from "express";
import { IPost, PostModel } from "../models/post";
import { verifyToken } from "./user";
import { PostErrors } from "../errors";
import jwt from "jsonwebtoken";
//import { UserModel } from "../models/user";

import { IUser, UserModel } from '../models/user';
import { UserErrors } from '../errors';

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
    const {title,image_url,cat, description, date, city, level, idAuthor} = req.body;
    try{
        const post: IPost = await PostModel.findOne({title});
        if(post){
            return res.status(400).json({type: PostErrors.TITLE_ALREADY_EXISTS})
        }
        let temp = cat.toLowerCase();
        let  newCat;
        if(temp == "futbol" || temp == "fútbol" || temp == "1"){
            newCat = 1;
        }else if(temp == "baloncesto" ||  temp == "2"){
            newCat = 2;
        }else if((temp == "voleibol" || temp == "volleyball" || temp == "3")){
            newCat = 3;
        }else{
            newCat = 4;
        }
        //return res.status(400).json({type: PostErrors.TITLE_ALREADY_EXISTS})

        temp = level.toLowerCase();
        let  newLevel;
        if(temp == "facil" || temp == "fácil" || temp == "1"){
            newLevel = 1;
        }else if(temp == "intermedio" ||  temp == "2"){
            newLevel = 2;
        }else{
            newLevel = 3;
        } 

        temp = city.toLowerCase();
        let  newCity;
        if(temp == "bogotá" || temp == "bogota" || temp == "1"){
            newCity = 1;
        }else if(temp == "medellín" ||  temp == "2" || "medellin"){
            newCity = 2;
        }
        

        const new_date = new Date(date);


        // const authorToken = req.headers.authorization;
        // let newAuthor;
        // console.log(authorToken);
        // try {
        //     let payload = jwt.verify(authorToken, "secret");
        //     newAuthor = payload.id; // Esto imprimirá la id del usuario
        // } catch(err) {
        //     console.error(err);
        // }
        let newAuthor = idAuthor;
        let authorPFP;
        let authorName;
        let target;

        try{
            target = await UserModel.findOne({_id: newAuthor});
            authorName = target.name;
            authorPFP = target.profilePic;
        }catch(err){
            res.status(400).json({err})
        }


        console.log (authorName,authorPFP)
        console.log(newAuthor);

        //const currentDate = new Date();
        const newPost = new PostModel({ title, image_url,cat: newCat, description, date:new_date, city: newCity, level: newLevel, author: newAuthor, authorName, authorPFP});

        await newPost.save();


        //         ///// YA CREAMOS EL POST AHORA SE LO AÑADIMOS AL USUARUIO

        async function actualizarPost() {
            const Pid: string = (await PostModel.findOne({title}))._id;
        
            try {
                let result = await UserModel.findOneAndUpdate(
                    { _id: idAuthor }, 
                    { $push: { posts: Pid } },
                    { new: true }
                );
                console.log("Post actualizado exitosamente: ", result);
            } catch (err) {
                console.log("Hubo un error: ", err);
            }
        }
        
        actualizarPost();

        res.json({message: "Event Created"});

    }catch (err){
        res.status(500).json({type: err});
    }
});

//hola xd

export{router as postRouter}