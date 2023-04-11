const mongoose = require("mongoose");



const postSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    destination: { type: String },
    travellers: { type: Number },
    budget: { type: Number }
}, {
    versionKey: false
});



const PostModel = mongoose.model('post', postSchema);



module.exports = { PostModel };