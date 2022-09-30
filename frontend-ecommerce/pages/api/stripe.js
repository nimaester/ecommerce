import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
  const session = getSession(req, res);
  const user = session.user;
  let stripeId;
  // need to fix adding user to customer in sessions create
  console.log(user["http://localhost:3000/stripe_customer_id"]);

  if (req.method === "POST") {
    if (user) stripeId = user["http://localhost:3000/stripe_customer_id"];
    try {
      const session = await stripe.checkout.sessions.create({
        // customer: stripeId,
        submit_type: "pay",
        payment_method_types: ["card"],
        allow_promotion_codes: true,
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },

        shipping_options: [
          { shipping_rate: "shr_1LemInCGPgQ7vRl5JavEVTdp" },
          { shipping_rate: "shr_1LemJfCGPgQ7vRl5jlGj8kFq" },
        ],

        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [item.image],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.count,
          };
        }),

        mode: "payment",

        success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
      });
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
}
