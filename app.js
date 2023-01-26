const Express=require("express")
const Mongoose=require("mongoose")
const Cors=require("cors")
const Bodyparser=require("body-parser")
const cModel=require("./models/courseModels")

var course=Express()
course.use(Bodyparser.json())
course.use(Bodyparser.urlencoded({extended:true}))

Mongoose.connect("mongodb+srv://college:college12345@cluster0.sonwgpf.mongodb.net/coursedb?retryWrites=true&w=majority",{useNewUrlParser:true})

course.get("/",(req,res)=>{
    res.send("welcome")
})

course.post("/add",async(req,res)=>{
    let data=new cModel(req.body)
    console.log(data)
    await data.save()
    res.send(data)
})

course.get("/viewallcourse",async(req,res)=>{
    let data=await cModel.find()
    res.send(data)
})
course.listen(3010)