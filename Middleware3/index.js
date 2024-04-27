import express from "express";
import bodyParser from "body-parser";
import { dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();
var isPasswordCorrect = false;

app.use(bodyParser.urlencoded({extended:true}));

function customMiddleware(req,res,next){
    const password = req.body["password"];
    if (password === "Jayshreeram"){
        isPasswordCorrect = true;
    } else{
        isPasswordCorrect = false;
    }
    next();
}

app.use(customMiddleware);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req,res)=>{
    if(isPasswordCorrect){
        res.sendFile(__dirname + "/public/success.html")
    }else{
        res.redirect("/");
    }
})
app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`);
})