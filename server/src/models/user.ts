import { Schema, model } from "mongoose";

export interface IUser{
    _id?: string;
    email: string;
    password: string;
    name: string;
    profilePic: string;
    backgroundPic: string;
    favCat: number;
    workAt: string;
    studiedAt: string;
    Age: number;
    city: number;
    num_followers: number;
    friends: string[];
    posts: string[];
    inter_posts: string[];
}

const placeHolder = "...";
const numPlaceHolder = 0;

const UserSchema = new Schema<IUser>({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    profilePic: { type: String, required: false , default: placeHolder},
    backgroundPic: { type: String, required: false , default: placeHolder},
    favCat: { type: Number, required: false , default: numPlaceHolder},
    workAt: { type: String, required: false, default: placeHolder },
    studiedAt: { type: String, required: false, default: placeHolder },
    Age: { type: Number, required: false, default: numPlaceHolder },
    city: { type: Number, required: false , default: numPlaceHolder},
    num_followers: { type: Number, required: false , default: 4},
    friends: [{ type: Schema.Types.ObjectId, ref: 'users', default: [] }],
    posts: [{ type: Schema.Types.ObjectId, ref: 'posts', default: [] }],
    inter_posts: [{ type: Schema.Types.ObjectId, ref: 'posts', default: [] }]
    
    

});



export const UserModel = model<IUser>("users", UserSchema);