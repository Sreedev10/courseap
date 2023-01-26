const Mongoose=require("mongoose")
let cSchema=Mongoose.Schema(
    {
        courseTitle:String,
        courseDestribution:String,
        courseVenue:String,
        courseDuration:String,
        courseDate:String
}
)
let cModel=Mongoose.model("course",cSchema)
module.exports=cModel