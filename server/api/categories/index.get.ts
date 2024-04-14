import { Category } from "~~/server/models/category.model";

export default defineEventHandler(async (event) => {
    try {

        return await Category.find();

    } catch (error) {
        createError({
            statusCode: 500,
            statusMessage: error?.message
        });
    }
})