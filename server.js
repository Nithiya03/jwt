require('dotenv').config();
const express = require('express');
const app=express();
const jwt=require('jsonwebtoken');

app.use(express.json())

app.listen(3000);


const  gets=[
   {
    username:"nithya",
    password:"nithyaMani"
   },
   {
    username:"Sanju",
    password:"sanjusiva"
   }

]

app.get('/gets',(req,res)=>{
    res.json(gets);
})

app.post('/gets',(req,res)=>{
    const username=req.body.username;
    const user={name:username}
    const accesstoken= jwt.sign(user,process.env.ACCESS_TOKEN)
    res.json({accesstoken:accesstoken});

})
