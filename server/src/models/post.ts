////xd new commint
import mongoose, { Schema, model } from "mongoose";

export interface IPost{
    _id?: string;
    title: string;
    image_url: string;
    cat: number;        // 1, 2,3,4
    description: string;
    date: Date;     ///
    city: number;  /// 1: Bogota 2:Medellin
    level: number;   /// 1,2,3
    num_members: number;
    members: string[];
    author: mongoose.Types.ObjectId
    authorPFP: string;
    authorName: string;

}

const PostSchema = new Schema<IPost>({

    title: {type: String, required: true, unique: true},
    image_url: {type: String, required: true}, 
    cat: {type: Number, required: true} ,
    description: {type: String, required: true},
    date: {type: Date, required: true},
    city: {type: Number, required:true},
    level: {type: Number, required:true, min: [0,"level cannot be lower than 0."]},
    num_members: {type: Number, default:0},
    members: [{type: Schema.Types.ObjectId, ref: 'users', default: []} ],
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'users', required:true},
    authorPFP: {type: String, required:true},
    authorName: {type: String, required:true}
    
});

export const PostModel = model<IPost>("posts", PostSchema);