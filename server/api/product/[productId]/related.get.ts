import { Product } from "~~/server/models/product.model";

export default defineEventHandler(async (event) => {
    try {
        const params = await event.context.params;

        const { categoryId } = await getQuery(event);
        if (!categoryId) {
            return createError({
                statusCode: 400,
                statusMessage: "No categoryId"
            });
        }

        if (!params?.productId) {
            createError({
                statusCode: 400,
                statusMessage: "No ProductId"
            });
        }
        const products = await Product.find({ categoryId: categoryId as string })

        return Array.isArray(products) ? products.filter(prod => prod._id != params.productId) : []
    } catch (error) {
        createError({
            statusCode: 500,
            statusMessage: error?.message
        });
    }
})