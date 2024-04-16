const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
const homeRouter = require("./routes/home");

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRouter);

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log(`Server is running on http://localhost${PORT}`);
})