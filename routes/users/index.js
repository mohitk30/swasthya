const express = require("express")
const router = express.Router() 
const UserModel=require('../../models/user') 
const BlogModel = require('../../models/blog')
const CommentModel= require('../../models/comment')



// Routes Related to users

const getFirstLevelFriends =(userId)=>{
     return CommentModel.find( {commentAddedByUserID: userId})
            .then((docs, error)=>{

                if(error) throw error
                var users = [];
               //  console.log(docs)
                // getting users from each blog
                // and excluding current user
                docs.filter(comment=>comment.commentAddedByUserID != userId)
                    .forEach(ele=>{
                        users = [...users, ele.commentAddedByUserID]
                    })
                
            return users;            
        }).catch(err=>-1)
}


router.get('/:userId/level/:levelNo', async (req, res) => { 
     
    try{ 
           const userId=req.params.userId;
          const levelNo= req.params.levelNo;

        // not able to implement the correct login 
        //  need to work more on this type of api's

         var friends=  await getFirstLevelFriends(userId);
         var previousLevelFriends;
          var kLevel = levelNo;
          kLevel--;

          if(friends == -1) res.send({message: 'something went wrong'})

          while(kLevel){
               // console.log("Executing...")
               var kLevelFriends = new Set()
               for(var friend of friends){
                 var firstLevelFriends = await  getFirstLevelFriends(friend);
                 for(var firstLevelFriend of firstLevelFriends){
                    var flag = 0;
                    for(friend of friends){
                    if(friend == firstLevelFriend){
                    flag = 1;
                    break;
                    }
                    }
                    if(flag == 0 && firstLevelFriend != userId) 
                    kLevelFriends.add(firstLevelFriend)
                 }
               }

               previousLevelFriends = friends
               friends = kLevelFriends;
               kLevel--;
          }

          var kLevelFriends = [];

          for(friend of friends){
               var docs;
               try{
               docs = await UserModel.find({_id: friend});
               var flag = 0;
               if(previousLevelFriends)
                    for(friend of friends){
                    if(previousLevelFriends.includes(friend)){
                    flag = 1;
                    break;
                    }
               }
               if(!flag)
               kLevelFriends = [...kLevelFriends, docs];
               }catch(e){
               kLevelFriends = []
               }
          }
          //  console.log('done')


     
        res.send({friends:kLevelFriends,status:'200',message:'Friends Found at requested level.'});

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