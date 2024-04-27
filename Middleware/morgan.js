import bodyParser from "body-parser";
import morgan from "morgan";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("combined"));  //use of morgan (custom middlewear)

// app.use((req,res,next)=>{
//     console.log("Request Method: ", req.method);
//     next();   //next function to proceed after handling middlewear
// })        //custom middlewear

app.get("/",(req,res)=>{
    res.send("Hellow Boy!")
})

app.listen(port, ()=>{
    console.log(`server is running at ${[port]}`);
})

