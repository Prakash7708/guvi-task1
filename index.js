const express=require('express')
const app=express()
const fs= require("fs");

app.post("/writefile",function(req,res){
    
    fs.writeFile("21-10-2022","04:30pm",(err)=>{
    if(err) throw err;
    console.log("file created")
    res.json({"message":"file created"})
 })

})



app.listen(3001);