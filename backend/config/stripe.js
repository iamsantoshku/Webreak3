const Stripe = require('stripe')

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


module.exports = stripe