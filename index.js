require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8080;

mongoose.set('strictQuery', true);

const { connection } = require("./connection/db.connect");
const { postRouter } = require("./routes/post.route");


const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (request, response) => {
    response.send("Welcome to Revision Modules mock15 evaluation");
});

app.use("/post", postRouter);



app.listen(port, async () => {
    try {
        await connection;
        console.log(`Server is running at port ${port}`);
    } catch (error) {
        console.log('Cannot able to start the server', "error: ",error);
    }
});
