import { Product } from "~~/server/models/product.model";
import { connectToDatabase } from "../../../mongoose";

export default defineEventHandler(async (event) => {
    try {
        const params = await event.context.params;
        if (!params?.productId) {
            createError({
                statusCode: 400,
                statusMessage: "No productId"
            });
        }
        await connectToDatabase();

        return await Product.findOne({ "_id": params?.productId });
    } catch (error) {
        createError({
            statusCode: 500,
            statusMessage: error?.message
        });
    }
})