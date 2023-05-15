// npm install stripe

import express from 'express'
import Stripe from 'stripe';
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_KEY);



router.post('/create-checkout-session', async (req, res) => {
  const {products, total, quantity} = req.body;
  const lineItems = products?.map(product => {
    return {
        price_data: {
          currency: 'usd',
          product_data:{
            name: product.title,
            images: [product.img],
            metadata:{
              id: product._id 
            }
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: product.quantity,
    }})
    console.log(lineItems)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {allowed_countries: ['US', 'CA']},
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {amount: 0, currency: 'usd'},
          display_name: 'Free shipping',
          delivery_estimate: {
            minimum: {unit: 'business_day', value: 5},
            maximum: {unit: 'business_day', value: 7},
          },
        },
      },
    ],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({url: session.url});
  
});

export default router