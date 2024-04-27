import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();
var anacondaDetails = "";

// Configure body-parser middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

function customMiddleware(req, res, next) {
    console.log(req.body);
    anacondaDetails = req.body["name"] + req.body["age"] + req.body["password"];
    next();
}

app.use(customMiddleware);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    res.send(`Your anaconda details are: ${anacondaDetails}`);
});

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});
