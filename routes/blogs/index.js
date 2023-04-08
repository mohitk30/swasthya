const express = require("express")
const router = express.Router() 
const BlogModel=require('../../models/blog') 



// Routes Related Blog


// Getting all blogs 


router.get('/all', async (req, res) => { 
     
    try{
        // getting all blogs from mongo db
        const allBlogs=await BlogModel.find({});
    
        res.send({blogs:allBlogs,status:'200',message:'These Blogs Found'});
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with blog data.'});

   }
})


// add new blog 


 
router.post('/add', async (req, res) => { 
     
    try{
        const blogData=req.body;
        // adding a new blog in database 
        const result= await BlogModel.create(blogData);
        res.send( {status:'200',message:'Blog added.'} );
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with blog data.'});

   }
})
 

// update blog

router.post('/update',  async (req, res) => { 
     
    try{
        const blogData=req.body;
        // updating a blog with given id 
        const result= await BlogModel.findOneAndUpdate({_id:blogData.id},{
            blogTitle: blogData.blogTitle,
            blogCategory:blogData.blogCategory,
            blogDescription:blogData.blogDescription,
            blogAddedByUser:blogData.blogAddedByUser,
            blogAddedByUserEmail:blogData.blogAddedByUserEmail,
        });
        res.send( {blog:result,status:'200',message:'Blog Updated.'} );
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with blog data.'});

   }
})



// delete blog


router.post('/delete',  async (req, res) => { 
     
    try{
        // delete a blog with the given id
        const blogData=req.body;
        const result= await BlogModel.findOneAndDelete({_id:blogData.id});
        if(result!=null){
           res.send( {blog:result,status:'200',message:'Blog Deleted.'} );
        }else{
            res.send( { status:'404',message:'No Blog found to delete.'} );
        }
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with blog data.'});

   }
})




module.exports = router