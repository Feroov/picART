var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    console.log("Currently at start page");
    res.render("index");
});

module.exports = router;
