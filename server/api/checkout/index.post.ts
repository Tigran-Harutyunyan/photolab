import { Order } from "~~/server/models/order.model";
import { Product } from "~~/server/models/product.model";
import type { TCart } from "@/types";
import { useServerStripe } from '#stripe/server';
import { connectToDatabase } from "../../mongoose";

export default defineEventHandler(async (event) => {

  const APP_URL = useRuntimeConfig().public.appUrl as string;
  const { cart } = await readBody(event);

  await connectToDatabase();

  try {

    if (!cart) {
      return createError({
        statusCode: 400,
        statusMessage: 'Cart not found in request body'
      });
    }

    const productIds = cart.map(i => i.id);

    const products = await Product.find({ _id: { $in: productIds } });

    const lineItems = cart.map((product: TCart) => {
      const item = products.find(i => i._id.toString() === product.id);

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item?.title,
          },
          unit_amount: item?.price * 100,
        },
        quantity: product?.amount,
      };
    });

    const stripe = await useServerStripe(event);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: `${APP_URL}?success=true`,
      cancel_url: `${APP_URL}?success=false`,
      line_items: lineItems,
      payment_method_types: ['card'],
    });

    await Order.create({
      stripeID: session.id,
      products: productIds
    })

    return { url: session.url };

  } catch (error) {
    createError({
      statusCode: 500,
      statusMessage: error.message
    })
  }
});
