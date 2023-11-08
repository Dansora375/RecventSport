import mongoose, { Schema, model } from "mongoose";

export interface IPost{
    _id?: string;
    title: string;
    image_url: string;
    description: string;
    dateEnd: Date;
    dateBeg: Date;
    place: string;
    level: number;
    num_inte: number;
    inte_users: string[];
    author: mongoose.Types.ObjectId;

}

const PostSchema = new Schema<IPost>({

    title: {type: String, required: true, unique: true},
    image_url: {type: String, required: true}, 
    description: {type: String, required: true},
    dateEnd: {type: Date, required: true},
    dateBeg: {type: Date, required: true},
    place: {type: String, required:true},
    level: {type: Number, required:true, min: [0,"level cannot be lower than 0."]},
    num_inte: {type: Number, default:1},
    inte_users: [{type: Schema.Types.ObjectId, ref: 'users', default: []} ],
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'users', required:true}
});

export const PostModel = model<IPost>("posts", PostSchema);