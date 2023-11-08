import { Schema, model } from "mongoose";

export interface ISports{
    _id?: string;
    name: string
}

const SportSchema = new Schema<ISports>({

    name: {type: String, required: true, unique: true},
});

export const SportsModel = model<ISports>("sports", SportSchema);