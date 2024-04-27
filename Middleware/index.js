import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/submit", (req,res)=>{
    console.log(req.body);
})

app.listen(port, ()=>{
    console.log(`server is running at ${[port]}`);
})

