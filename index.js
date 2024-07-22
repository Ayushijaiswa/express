const express=require('express');
const path=require("path");


const app=express();
let port =3000;
app.set("view engine","ejs");


app.set("views",path.join(__dirname,"/views"));





app.listen(port,()=>{
    console.log("app is listening")
})
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const users=['khushi','ansh',"harsh"];
    res.render("insta.ejs",{username,users});
    console.log(username)
})
app.get("/insta/:users",(req,res)=>{
    let {users}=req.params;
    const instadata=require("./data.json");
   
    const data=instadata[users];
    res.render("instagram.ejs",{data});
})



app.get("/roll",(req,res)=>{
    let dice=Math.floor(Math.random()*6)+1;
    //pass in the form of object
    res.render("dice.ejs",{num:dice})
})


app.get('/',(req,res)=>{
    res.render("home.ejs")
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
