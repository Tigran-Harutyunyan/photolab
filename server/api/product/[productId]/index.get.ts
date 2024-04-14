import { Product } from "~~/server/models/product.model";

export default defineEventHandler(async (event) => {
    try {
        const params = await event.context.params;
        if (!params?.productId) {
            createError({
                statusCode: 400,
                statusMessage: "No productId"
            });
        }

        return await Product.findOne({ "_id": params?.productId });
    } catch (error) {
        createError({
            statusCode: 500,
            statusMessage: error?.message
        });
    }
})