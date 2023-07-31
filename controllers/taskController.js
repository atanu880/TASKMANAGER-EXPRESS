
const Task=require("../models/Task")

const getTasks=async (req,res)=>{
    try{
        let tasks=await Task.find().lean()
        res.render("home",{tasks})
    }catch(error){
        console.log(error);
    }
}

const createTask=async(req,res)=>{
    let {task}=req.body
    
    try{
       let duplicate=await Task.findOne({task:task})
       if(duplicate){
          return res.redirect("/task")
       }else{
          await Task.create({
             task:task  //we store task 
          })
          res.redirect("/task")
       }
    } 
    catch(error){
       console.log(error)
       res.status(401).json({
          message:"cant create task"
       })
    }
    
 }
 
 const getTask=async(req,res)=>{
   let id=req.params.id
   try {
      let task= await Task.findOne({_id:id}).lean()
      console.log(task);
      res.render("update",{task})
      
   } catch (error) {
      console.log(error);
   }
}

const updateTask=async(req,res)=>{
   let id=req.params.id
   let {task}=req.body //here body store in task
   try {
      await Task.updateOne({_id:id},{$set:{task:task}})
      res.redirect("/task")
     
   } catch (error) {
      console.log(error)
      res.redirect("/task/:id")
   }
}

const deleteTask=async(req,res)=>{
   let id=req.params.id
   try {
      await Task.deleteOne({_id:id})
      res.redirect("/task")
     
   } catch (error) {
      console.log(error)
      res.redirect("/task")
   }
}



 

module.exports={getTasks,createTask,getTask,updateTask, deleteTask}