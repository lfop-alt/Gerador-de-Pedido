const dotenv = require('dotenv');

dotenv.config();

require('./src/database/connection');
const express = require('express');
const cors = require('cors');
const routers = require('./src/routers');

const app = express();

app.set('view engine', 'ejs');

// const corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 204
// }
// app.use(cors(corsOptions));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", '*')
    res.header("Access-Control-Allow-Methods", 'POST', 'GET', 'PUT')
    app.use(cors())
    next();
});
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(routers);

module.exports = app;
