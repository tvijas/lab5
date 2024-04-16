const express = require("express");

const router = express.Router();

router.get("/", (request, response, next) => {
    try {
        response.render("home", {
            pageTitle: "In progress...",
        });
    }catch (err){
        response.render("home",{
            pageTitle: "404 Not Found",
        })
    }
});

module.exports = router;