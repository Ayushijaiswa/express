const express=require('express');

const app=express();
let port =3000;
app.listen(port,()=>{
    console.log("app is listening")
})
app.get('/',(req,res)=>{
    res.send("hii")
})
//standard response

app.post("/",(req,res)=>{
    res.send("root post")
})
app.get("/:username/:id",(req,res)=>{
    res.send(req.params)
    console.log(req.params);
})
app.get("*",(req,res)=>{
    res.send("wildcard")
 })
 app.get("/search",(req,res)=>{
    console.log(req.query)
 })
