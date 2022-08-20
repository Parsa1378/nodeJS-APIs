require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = process.env.PORT || 8080;
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//app.use(express.static('./public'));
app.use(express.json());


app.use('/api/v1', routes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const start = async() => {
    try {
        app.listen(port, () =>
            console.log(`server running on port: ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();