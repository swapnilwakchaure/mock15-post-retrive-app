const express = require('express');
const { PostModel } = require("../models/post.model");
const { model } = require('mongoose');


const postRouter = express.Router();


// POST DATA GET REQUEST
postRouter.get("/", async (request, response) => {
    const query = request.query;

    try {
        const data = await PostModel.find(query);
        response.send(data);
    } catch (error) {
        response.send({ "Message": "404 something went wrong", "Error": error });
    }
});


// POST DATA POST/ADD REQUEST
postRouter.post("/addpost", async (request, response) => {
    const payload = request.body;

    try {
        const data = new PostModel(payload);
        await data.save();
        response.send({ "Message": "post data successfully added into the database" });
    } catch (error) {
        response.send({ "Message": "404 something went wrong", "Error": error });
    }
});


// DELETE DATA WITH ID DELETE REQUEST
postRouter.delete('/delete/:id', async (request, response) => {
    const ID = request.params.id;

    try {
        await PostModel.findByIdAndDelete({ _id: ID });
        response.send({ "Message": `post data of id: ${ID} successfully deleted from database` });
    } catch (error) {
        response.send({ "Message": "something went wrong", "Error": error });
    }
});




module.exports = { postRouter };