const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const AWS = require("aws-sdk");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const app = express();
require("dotenv").config();

const PORT = 3000;
const cors = require("cors");
app.use(cors({
  origin: '*', // Allow all origins - be cautious with this in production
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(express.json());

app.get("/giftit", (req, res) => {
    res.send("GiftIt");
  });
  
  app.get("/", (req, res) => {
    console.log(req.body);
    res.send("GiftIt");
  });
  
  app.post("/", (req, res) => {
    res.send("GiftIt");
  });
  
  app.listen(PORT, () => {
    console.log("port is running", PORT);
  });
