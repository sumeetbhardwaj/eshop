
const express = require('express');
require('dotenv').config({path:"./config/config.env"});
const path = require('path');
const bodyParser = require('body-parser');
const commonRouter = require('./router/commonRoute')
const userRouter = require('./router/userRoute');
const ejs = require('ejs');

const app = express();
// // Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(commonRouter);
app.use(userRouter);

const server = app.listen(PORT, () => console.log(`Server run on port ${PORT}`));

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);  
    server.close(() => {
      process.exit(1);
    });
});