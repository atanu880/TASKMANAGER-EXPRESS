const express=require("express")
const mongoose=require("mongoose")
const taskRouter=require("./routes/taskRoute")
const methodOverride =require("method-override")

let app=express()

//db connection
async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/taskDB") //taskDb database name
    console.log("db connected");
}
db()

//register template
app.set("view engine","ejs")

//inbuilt middleware
//static files
app.use(express.static("public"))
//to get form data
app.use(express.urlencoded({extended:false}))

app.use(methodOverride('_method')) /*all the middle ware should be passed before path*/

app.use("/task",taskRouter)
http://localhost:5000/task/

//http://localhost:5000/task/update


app.listen(5000,()=>{
    console.log("server is running on port 5000");
})