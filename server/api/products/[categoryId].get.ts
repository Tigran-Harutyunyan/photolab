import { Product } from "~~/server/models/product.model";
import { connectToDatabase } from "../../mongoose";

export default defineEventHandler(async (event) => {
    try {
        const params = await event.context.params;

        if (!params?.categoryId) {
            createError({
                statusCode: 400,
                statusMessage: "No categoryId"
            });
        }

        await connectToDatabase();

        return await Product.find({ categoryId: params?.categoryId as string });
    } catch (error) {
        createError({
            statusCode: 500,
            statusMessage: error?.message
        });
    }
})