const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require("./config/database");
const router = require("./routes");
const passportJWT = require("./config/passport-jwt")
const app = express();
const port = 8800 || process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.use(express.static(path.join(__dirname,'downloads')))

app.use("/", router)
app.listen(port, (err)=>{
    if(err){
        console.log("error in listing the port", err);
    }
    console.log("server is running on port", port)
})
