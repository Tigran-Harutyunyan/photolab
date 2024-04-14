import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    isNew: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        required: true
    },
    categoryId: {
        required: true,
        type: String
    },
}, {
    suppressReservedKeysWarning: true
});

export const Product = model("Product", ProductSchema);