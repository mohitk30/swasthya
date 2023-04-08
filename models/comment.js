const mongoose=require('mongoose')
const {blogsConnection} = require('../dbConnection/dbconnect');

 

const commentSchema= new mongoose.Schema({
    
    commentAddedOn:{ type: Number ,default: () => new Date(+new Date() + 7*24*60*60*1000)},
    blogID:{type:String,required:true},
    comment:{type:String,required:true },  
    commentAddedByUserID:{type:String,required:true},
    commentAddedByUserName:{type:String,required:true}, 
  
     

},{collection:'comment'});

const model=blogsConnection.model('CommentModel',commentSchema);

module.exports=model


 