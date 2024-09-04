const { Post, Usuario } = require("../db.js");
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
else {
  const {id}=req.params
  console.log(id)
  if(!id){ 
 var posts= await Post.findAll({raw: true});}
 else{
  var posts= await Post.findAll({where: { id: id },raw: true})
}
 


 var now= new Date()



 
 if(posts.length==0){posts=[

  {
      id: 1,
      title: "No hay empleos para mostrar",
      time: new Date(),
      desc: "No hay empleos para mostrar",
      localidad:"CABA",
      empresa:"ninguna"
 
  }
]}
console.log(posts)
var posts=posts.map(post =>{
  var fecha = new Date(post.time)
  post.time=Math.round((now.getTime()-fecha.getTime())/(1000*60*60*24))

  return post})

  res.json(posts);


}}


module.exports = crearPost;
