const express=require("express")
// const Task=require("../models/Task") //nothing but my model
const { getTasks, createTask, getTask,updateTask,deleteTask } = require("../controllers/taskController")


let taskRouter=express.Router()
taskRouter.get("/",getTasks)


taskRouter.post("/",createTask)

taskRouter.get("/:id",getTask)

taskRouter.put("/:id",updateTask)

taskRouter.post("/:id",deleteTask)



module.exports=taskRouter;