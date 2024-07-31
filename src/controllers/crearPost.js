const { Post } = require("../db.js");
const bcrypt = require("bcrypt")
const crearPost = async (req, res) => {

if(req.method==="POST"){
  try {

  const  post=req.body
  post.time= new Date();
  console.log(post)

  await Post.create(post);
      res.json(req.body);
  
} 

  catch (error) {
    console.log(error)
    res.status(500).json({ message: error });
  }
}

}


module.exports = crearPost;
