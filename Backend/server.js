const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require('dotenv').config();

const app = express()

app.use(cors())
app.use(express.json())

//how to connect to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`Connection Successful`))
    .catch(error => console.log(error.message))

//blueprint of the data going to the database - schema

const postSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    occupation: String,
    contact: String
})

const Post = mongoose.model("Post", postSchema)

//get all post
//get 1 post
//create new post
//delete post

//we are using async because it could fail. Async can handle better on
//the waiting for long time request. Response must come back first
//before something can be executed

//get all posts
app.get("/posts", async (req,res) => {
    const posts = await Post.find()
    res.send(posts)
})

//get 1 post
app.get("/posts/:id", async (req,res) => {
    const posts = await Post.findById(req.params.id)
    res.send(posts)
})

//create post
app.post('/posts', async (req,res) => {
    const newPost = new Post(req.body)
    const savedPost = await newPost.save() //write and save to database
    res.send(savedPost) //send result back to front-end
})

//update
app.put('/posts/:id', async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      // The 'new' option returns the updated document
  
      if (!updatedPost) {
        return res.status(404).send("Post not found");
      }
  
      res.send(updatedPost);
    } catch (error) {
      console.error(error);
      res.status(500).send("Update failed");
    }
  });

//delete post
app.delete('/posts/:id', async (req,res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).send("Post Deletion Successful")
})

//I want to spit up the server to see if it works
app.listen(5500, () => console.log("Server starting..."))