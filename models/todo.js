const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const tododetails=new Schema({
    userId:{
        type:String,
        default:''
    },
    firstName:{
        type:String,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    event:{
        type:String,
        default:""
    },
    Done:{
        type:String,
         default:''
    },
    statusId:{
        type:String,
        default:''
    },
    createdOn:{
        type:Date,
        default:Date.now()
    }
})

mongoose.model('Todo',tododetails)