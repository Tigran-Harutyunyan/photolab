import { Category } from "~~/server/models/category.model";

export default defineEventHandler(async (event) => {
    const params = await event.context.params;

    if (!params?.categoryId) {
        createError({
            statusCode: 400,
            statusMessage: "No categoryId"
        });
    }

    try {
        return await Category.findOne({ _id: params?.categoryId as string });
    } catch (error) {
        createError({
            statusCode: 500,
            statusMessage: error?.message
        });
    }
})