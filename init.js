const mongoose = require("mongoose");
const Todo = require("./models/todo");


main().then((result)=>{
    console.log("Data inserted");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/task");
}


let newtasks = [
    {
        title:"Codeing",
        des:"I love to code the coding",
        priority:"High"
    },
    {
        title:"Eating",
        des:"Going for lunch",
        priority:"Medium"
    },
    {
        title:"Assignments",
        des:"Have to complete maths, assignement",
        priority:"High"
    },
    {
        title:"Excrise",
        des:"Going to gym",
        priority:"High"
    },

];

Todo.insertMany(newtasks).then((result)=>{
    console.log("Data Entered");
}).catch((err)=>{
    console.log(err);
})
