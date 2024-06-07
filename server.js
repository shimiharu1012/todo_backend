const express= require("express");
const app=express();
const portNum=3001


app.listen(portNum,console.log("サーバーが起動しました"))
app.use(express.json())



app.get("/",(req,res)=>{
    res.send("Hello Express Server")
})

