I have used ```NodeJs``` for backend and ```MongoDB``` as Database with ```mongoose``` ORM.

I have also pushed the .env files for reference only they doesn't contain any api key or any passwords.

 Steps to Run the backend at local system -

 ```js
 Clone the repository and then 

 $ cd swasthya
 $ npm install
 $ npm start

 ```


 ```  I have created the REST Api for all required API routes. ```

Api related to blogs
1. Add blog ( Post request ) 

     ``` http://localhost:7000/v1/blog/add ```

   - we need to pass the object of blog data in the body of api call.


2. View All blogs (get request)
    
    ``` http://localhost:7000/v1/blog/all ```


3. Update blog ( Post request ) 

     ``` http://localhost:7000/v1/blog/update ```

   - we need to pass the new updated object of blog data in the body of api call.

4. Delete blog ( Post request ) 

     ``` http://localhost:7000/v1/blog/delete ```

   - we need to pass the object of blog id which we need to delete  in the body of api call.


API related to Comments

1. Add Comment ( Post request ) 

     ``` http://localhost:7000/v1/comment/add ```

   - we need to pass the object of comment data in the body of api call.


2. View All Comments of a specific blog (get request)
    
    ``` http://localhost:7000/v1/comment/:blogId ```
    - we need to provide the blog id in params of api call


API related to Users

1. Add User ( Post request ) 

     ``` http://localhost:7000/v1/user/add ```

   - we need to pass the object of user data in the body of api call.


2. View All Users Details (get request)
    
    ``` http://localhost:7000/v1/user/all ```
    - this will return all the user list with password 
    - we can hide the password from that list
    - also we are saving the password directly we can also use to save the hashed password (using bcrypt or any other package)

3. To view the list of kth level friends of a user with given user id ( get request )

   ``` http://localhost:7000/v1/user/:userId/level/:levelNo ```

   - here we need to provide the user id for which we need to find the friends and the levelNo of friends.

   - I am not able to implement this api completely , the reason might me the lack of understanding of problem statement or the lack of deep understanding ( which i am looking to learn)


    