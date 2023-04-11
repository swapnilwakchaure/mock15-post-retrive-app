require('dotenv').config();
const mongoose = require('mongoose');


// const connection = mongoose.connect(process.env.mongoURL);
const connection = mongoose.connect('mongodb://swapnilwakchaure:mongodb@ac-hozldxs-shard-00-00.pgstk4w.mongodb.net:27017,ac-hozldxs-shard-00-01.pgstk4w.mongodb.net:27017,ac-hozldxs-shard-00-02.pgstk4w.mongodb.net:27017/fullstackreact?ssl=true&replicaSet=atlas-rk5qgc-shard-0&authSource=admin&retryWrites=true&w=majority');


module.exports = { connection };