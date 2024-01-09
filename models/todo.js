const mongoose = require("mongoose");


let taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    }
});

let Todo = new mongoose.model("Todo",taskSchema);

module.exports = Todo;