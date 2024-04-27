import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hellow World! Meow billi</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1> About Me</h1> <p> This is sumit dube </p>");
})

app.post("/register", (req,res)=>{
    //do something with the data
    res.sendStatus(201);
})

app.put("/user/sumit", (req,res)=>{
    res.sendStatus(200);
})
 
app.patch("/user/sumit", (req,res)=>{
    res.sendStatus(200);
})

app.delete("/user/sumit", (req,res)=>{
    res.sendStatus(200);
})

app.listen(port, ()=>{
    console.log(`server listening at ${port}`);
});