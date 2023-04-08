const mongoose=require('mongoose')
const {blogsConnection} = require('../dbConnection/dbconnect');

 

const blogsSchema= new mongoose.Schema({
    
    blogAddedOn:{ type: Number ,default: () => new Date(+new Date() + 7*24*60*60*1000)},
    blogTitle:{type:String,required:true }, 
    blogDescription:{type:String,required:false},
    blogAddedByUserID:{
        type:String,
        ref:'users',
        required:true
    }, 
  
     

},{collection:'blogs'});

const model=blogsConnection.model('BlogModel',blogsSchema);
 
module.exports=model


 