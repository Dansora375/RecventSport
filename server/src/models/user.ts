import { Schema, model } from "mongoose";

export interface IUser{
    _id?: string;
    email: string;
    password: string;
    //groups: string[];
    friends: string[];
    posts: string[];
}

const UserSchema = new Schema<IUser>({

    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    friends: [{type: Schema.Types.ObjectId, ref: "users", default: []}],
    posts: [{type: Schema.Types.ObjectId, ref: "posts", default: []}]
    

});

export const UserModel = model<IUser>("users", UserSchema);