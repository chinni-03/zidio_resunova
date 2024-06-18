const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require("./config/database");
const router = require("./routes");
const passportJWT = require("./config/passport-jwt")
const app = express();
const port = 8800;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/", router)
app.listen(port, (err)=>{
    if(err){
        console.log("error in listing the port", err);
    }
    console.log("server is running on port", port)
})
