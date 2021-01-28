import express from "express";

import path from 'path';
const __dirname = path.resolve();  //this is how you have to define __dirname in ES6 version of node

import bodyParser from "body-parser";
const app = express();

app.use("/static", express.static(path.join(__dirname, "static"))); //doesn't work with an alias
app.use(bodyParser.urlencoded({extended:false}))
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "static", "index.html"));
    // res.send("it works")
    // console.log(__dirname)
})
app.post("/", (req, res)=>{
    console.log(req.body);
    res.send("works")
})
app.get("/example", (req, res)=>{
    res.send("Hitting a new route")
})

app.get("/example/:name/:age", (req, res)=>{
    res.send(`${req.params.name} is ${req.params.age} years old`)
    console.log(req.query)
})


app.listen(3000);