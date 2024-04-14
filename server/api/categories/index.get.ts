import { Category } from "~~/server/models/category.model";
import { connectToDatabase } from "../../mongoose";

export default defineEventHandler(async (event) => {
    try {
        await connectToDatabase()
        console.log('eeee')
        return await Category.find();

    } catch (error) {
        createError({
            statusCode: 500,
            statusMessage: error?.message
        });
    }
})

// import prismadb from "@/lib/prismadb"

// export default defineEventHandler(async (event) => { 

//     try {

//         const categories = await prismadb.category.findMany()

//         return categories;

//     } catch (error: any) {
//         throw createError({
//             statusCode: 500,
//             statusMessage: error
//         });
//     }

// });