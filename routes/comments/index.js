const express = require("express")
const router = express.Router() 
const CommentModel=require('../../models/comment') 



// Routes Related to comments





router.post('/add', async (req, res) => { 
     
    try{
        const commentData=req.body;
        // adding a new comment in database 
        const result= await CommentModel.create(commentData);
        res.send( {status:'200',message:'Comment added.'} );
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with Comment data.'});

   }
})

// Getting all comments 


router.get('/:blogId', async (req, res) => { 
     
    try{
        // getting all blogs from mongo db
        const blogId= req.params.blogId;
        const allComments=await CommentModel.find({blogID:blogId});
    
        res.send({comments:allComments,status:'200',message:'Comments Found'});
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with Comments data.'});

   }
})

 


module.exports = router