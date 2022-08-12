require('dotenv').config();

const express = require('express');
const db = require('./controller/db/connect');
const app = express();
const port = process.env.PORT || 8000;


//testing
const Product = require('./model/products');
//just for test
app.get('/', async(req, res) => {
    try {
        const products = await Product.find(req.query);
        res.status(200).json({ products, nbHits: products.length })
    } catch (error) {
        console.log(error);
    }
});

const start = async() => {
    try {
        await db(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server running on port: ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();