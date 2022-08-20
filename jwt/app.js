const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


app.use(notFoundMiddleware);
app.use(express.json());
app.use(errorHandlerMiddleware);


const start = async() => {
    try {
        app.listen(port, () => console.log(`server running on port: ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();