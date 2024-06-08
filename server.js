const express= require("express");
const mongoose=require('mongoose');
const todo=require('./model/todo');
const router=require('./routes/router')

const app=express();
const portNum=3001;
app.use(router)
app.use(express.json())

app.listen(portNum,console.log("サーバーが起動しました"))
mongoose.connect('mongodb+srv://shimizuharuki314:tutorial@cluster0.lhsxstu.mongodb.net/')
.then(()=>console.log('DB connection is OK!!'))
.catch((err)=>console.log(err))


app.get("/",(req,res)=>{
    res.send("Hello Express Server")
})

