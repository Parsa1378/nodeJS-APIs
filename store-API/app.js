require('dotenv').config();
const express = require('express');
const db = require('./controller/db/connect');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('hello');
})

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