import { Product } from "~~/server/models/product.model";

export default defineEventHandler(async (event) => {
    try {
        const queryParams = await getQuery(event);

        if (queryParams?.query) {
            return await Product.find({ 'title': { $regex: new RegExp(`${queryParams?.query}`, "ig") } });
        }

        return await Product.find();

    } catch (error) {
        createError({
            statusCode: 500,
            statusMessage: error?.message
        });
    }
})