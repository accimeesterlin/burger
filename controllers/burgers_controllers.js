
var express = require("express");

var router = express.Router();

var orm = require("../config/orm");


router.get("/", function (req, res) {
    orm.selectAll(function (result) {
        res.render("index", {result: result});

    });

});

router.put("/add", function (req, res) {
    var data = req.body;
    var date = new Date();

    orm.insertOne(data.burger_name, true, date);
    res.redirect("/");
});



router.put("/:id", function (req, res) {
    var id = req.params.id;
    console.log(id);

    orm.updateOne(false, id);
    res.redirect("/");

});



module.exports = router;

// Update the DOM and the Database