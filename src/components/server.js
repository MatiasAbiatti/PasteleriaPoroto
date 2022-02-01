import React ,{useEffect,useState}from "react" ;

export default function server;

const express = require("express");
const app = express();

const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Creaar pago

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "ARS",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

