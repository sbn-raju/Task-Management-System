const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Todo = require("./models/todo");
const methodOverride = require("method-override");

app.set("view engine" ,"ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));


main().then((result)=>{
    console.log("Connection to database Estiblished");
}).catch((err)=>{
    console.log(err);
});


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/task");
}


let port  = 8080;

app.listen(port,()=>{
    console.log("Listening at port",port);
})

app.get("/", async (req,res)=>{
    let displayTask = await Todo.find({})
       res.render("index.ejs",{displayTask}); 
        
});

app.delete("/task/:id",async(req,res)=>{
    let{ id }= req.params ;
    let deletedTask = await Todo.findByIdAndDelete(id);
    console.log(deletedTask);
    res.redirect("/");
})

app.post("/task",(req,res)=>{
    let{title, des, priority} = req.body;
    let newAddTask = new Todo({
        title:title,
        des:des,
        priority:priority
    });
    newAddTask.save().then((result)=>{
        console.log("Data entered in Database");
        res.redirect("/");
    }).catch((err)=>{
        console.log(err);
    })
});
