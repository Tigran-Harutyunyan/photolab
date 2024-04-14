import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    title: {
        required: true,
        type: String
    },
    products: [],
});

export const Category = model("Category", CategorySchema);