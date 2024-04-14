import { Schema, model } from "mongoose";

const BrandSchema = new Schema({
    title: {
        required: true,
        unique: true,
        type: String
    },
});

export const Brand = model("Brand", BrandSchema);