const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')

const stripe = require('stripe')(process.env.STRIPE_KEY)

// API
// - app config
const app = express()

// - middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// - api route
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total

    console.log('Payment received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'USD'
    })
    // 201 -> ok + created something
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
        
    })
})


// - listen command
exports.api = functions.https.onRequest(app)