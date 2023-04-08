const express = require("express")
const router = express.Router() 
const UserModel=require('../../models/user') 
const BlogModel = require('../../models/blog')
const CommentModel= require('../../models/comment')



// Routes Related to users




router.get('/:userId/level/:levelNo', async (req, res) => { 
     
    try{ 
           const userId=req.params.userId;
          const levelNo= req.params.levelNo;

        // not able to implement the correct login 
        //  need to work more on this type of api's
     
        res.send({friends:[],status:'200',message:'Friends Found at requested level.'});

   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with User data.'});

   }
})

router.post('/add', async (req, res) => { 
     
    try{
        const userData=req.body;
        // adding a new user in database 
        const result= await UserModel.create(userData);
        res.send( {status:'200',message:'User added.'} );
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with User data.'});

   }
})

// Getting all users 


router.get('/all', async (req, res) => { 
     
    try{
        // getting all blogs from mongo db
        const allUsers=await UserModel.find({});
    
        res.send({users:allUsers,status:'200',message:'Users Found'});
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with users data.'});

   }
})

 


module.exports = router