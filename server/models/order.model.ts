import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    stripeID: {
        type: String,
        required: true
    },
    products: [],
});

export const Order = model("Order", OrderSchema);