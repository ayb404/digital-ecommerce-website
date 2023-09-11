const express = require('express')
const app = express()
var mongoose = require('mongoose')
const Product = require('./Api/product')
const Contact = require('./Api/contact')
const Order = require('./Api/order')



const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

app.listen(8080, () => console.log('app running'))

mongoose.set("strictQuery",false);


mongoose.connect(process.env.connectdb , {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('success')).catch(() => console.log('error'));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  

app.use(express.json());
app.use("/api/product" , Product)
app.use("/api/contact" , Contact)
app.use("/api/order" , Order)

