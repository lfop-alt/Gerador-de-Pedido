const dotenv = require('dotenv');

dotenv.config();

require('./src/database/connection');
const express = require('express');
const cors = require('cors');
const routers = require('./src/routers');

const app = express();

app.set('view engine', 'ejs');
app.use(cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'OPTIONS,GET, POST');
//   res.header('Access-Control-Allow-Headers: *');
//   app.use(cors());
//   next();
// });
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(routers);

module.exports = app;
