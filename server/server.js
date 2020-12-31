const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')


const app = express()
mongoose.connect('mongodb://localhost:27017/blog',{useFindAndModify:false,useNewUrlParser: true })
mongoose.connection.on('connected',()=>{
    console.log("Server is connected to databse")
})
const PostSchema = mongoose.Schema({
    title:{
        type:String,
        unique:false,
    },
    content:String,
    author:String,
    liked:Number,
    timestamp:String,

})
const PostModel= mongoose.model('post',PostSchema)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({redirect:true}))
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.post('/api/post/new',(req,res)=>{
  let payload={
      title:req.body.title,
      content:req.body.content,
      liked:0,
      author:req.body.author,
      timestamp:new Date().getTime(),

  }
  let newPost = new PostModel(payload)
  newPost.save((err,result)=>{
      if(err) res.send({success:false,msg:result});
      res.redirect('http://127.0.0.1:8082')
  })
})
app.get('/api/posts/all',(req,res)=>{
    PostModel.find((err,result)=>{
        if(err) res.send({success:false,msg:false});

        res.send({success:true,result:result})
    })
})
app.post('/api/post/update/',(req,res)=>{

    PostModel.updateOne({_id:req.body.id},{title:req.body.title,author:req.body.author,content:req.body.content},(err,result)=>{
        if(err) res.send({success:false,msg:err});
        res.redirect('http://127.0.0.1:8082')

    })
})
app.post('/api/post/remove/:id',(req,res)=>{

    PostModel.findOneAndDelete({_id:req.params.id},(err,result)=>{
        if(err) res.send({success:false,msg:err});
        console.log(`The post with the title ${result.title} has been deleted`)


    })
})
app.get('/api/post/view/:id',(req,res)=>{
    PostModel.findOne({_id:req.params.id},(err,result)=>{
        if(err) res.redirect('http://localhost:8080/')
        res.send(result)
    })
})
app.post('/api/post/like',(req,res)=>{

    PostModel.updateOne({_id:req.body.id},{liked:req.body.boo},(err,result)=>{
        if(err) res.send({success:false,msg:err});
        res.send({success:true,result:result})
    })
})
const port =process.env.port ||  3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})