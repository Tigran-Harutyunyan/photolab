import { APIFeatures } from '#nuxt-server-utils'
import { Product } from "~~/server/models/product.model";

export default defineEventHandler(async (event) => {


    const product = await Product.create({
        "title": "Olympus TG-6 Photo Camera Compact Subacvatic 12MP 4K Black",
        "description": "Characterized by its exceedingly durable design, the red Tough TG-6 from Olympus is a sleek point-and-shoot capable of handling a wide variety of adventures. Featuring a 12MP BSI CMOS sensor and TruePic VIII image processor, the TG-6 offers notable image clarity and low-light performance to ISO 12800, along with fast 20-fps continuous shooting, 4K30p video recording, and high-speed Full HD 1080p shooting at 120 fps.",
        "price": 486,
        "isNew": true,
        "image": "https://res.cloudinary.com/dcp1kve4t/image/upload/v1713076120/bouoneikb8dxgxozu2os.png",
        "categoryId": "661ae18eb6dd27d2304144f7"
    })


    return product;
})
