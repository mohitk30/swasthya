require("dotenv").config();
const express = require('express')
const port = process.env.PORT || 7000  ;  
const app = express();
const bodyParser = require('body-parser');
 
const cors = require('cors')

 

//routes
const blogRoutes=require('./routes/blogs')
const commentRoutes=require('./routes/comments')
const userRoutes=require('./routes/users')
 



app.use(cors());  
app.use(express.json({limit: '50mb'})); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', async(req, res) => {
    res.send("This is up and running server of Backend ")
})



app.listen(port, (err) => {
    if (err)
        console.log('There is an error in running');

    console.log(`Server is running at ${port}`); 
}) 


// using different modules for different functionalities

app.use("/v1/blog", blogRoutes)
app.use("/v1/comment", commentRoutes)
app.use("/v1/user", userRoutes)

