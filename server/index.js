const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");
const db = require("./config/database");
const passport = require("passport");
 // Ensure passport strategy is loaded
require("./config/passport-jwt")

const app = express();
const port = process.env.PORT || 8800;

app.use(express.json());
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use("/", router);

app.listen(port, (err) => {
    if (err) {
        console.log("Error in listening on port", err);
    } else {
        console.log("Server is running on port", port);
    }
});
