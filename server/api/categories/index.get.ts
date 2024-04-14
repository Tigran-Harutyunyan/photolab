import { Category } from "~~/server/models/category.model";
// import { connectToDatabase } from "../../mongoose";

export default defineEventHandler(async (event) => {
    try {
        // await connectToDatabase()

        return await Category.find();

    } catch (error) {
        createError({
            statusCode: 500,
            statusMessage: error?.message
        });
    }
});