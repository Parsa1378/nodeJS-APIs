//just a file to add some junk data to db to work with

require('dotenv').config();

const connectDB = require('./controller/db/connect');
const Product = require('./model/products');
const jsonProducts = require('./products.json');

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('success');
        process.exit(0);
    } catch (error) {
        console.log('at populate ', error);
        process.exit(1);
    }
};

start();