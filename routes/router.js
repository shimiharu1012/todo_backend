const express=require('express')
const todoModel=require('../model/todo')
const app=express();


app.use(express.json())

// HTTPメソッドのルーティング
// URIに対する

//データの取得
app.get("/todos",async(req,res)=>{
    //データベースの中のデータを全て返す
    const todos=await todoModel.find({});
    
    try{
        res.send(todos)
    }catch(err){
        res.status(500).send(err);
    }
});

//データの作成
app.post("/todo",async(req,res)=>{
    //データベースの中のデータを全て返す
    const todo=new todoModel(req.body);

    try{
        await todo.save();
        res.send(todo);
    }catch(err){
        res.status(500).send(err);
    }
});


//データの部分修正
app.patch("/todo/:id",async(req,res)=>{
    try{
        await todoModel.findByIdAndUpdate(req.params.id,req.body);
        await todoModel.save();
    }catch(err){
        res.status(500).send(err);
    }
});


//データの削除
app.delete("/todo/:id",async(req,res)=>{
    try{
        await todoModel.findByIdAndDelete(req.params.id);
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports=app;