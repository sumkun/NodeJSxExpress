import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    const data = {
        title: "Dhoom!!",
        seconds: new Date().getSeconds(),
        items: ["banana", "apple", "mango", "cherry"],
    };
    res.render("solution.ejs", data);
})
app.listen(port, ()=>{
    console.log(`Listening on the port ${port}`);
})