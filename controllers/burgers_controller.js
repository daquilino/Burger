const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

// Import the model (cat.js) to use its database functions.
const BURGER = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
ROUTER.get("/", function(req, res) {
  BURGER.selectAll(function(data) {
    //
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//INSERT
ROUTER.post("/", function(req, res) {
  BURGER.insertOne(req.body.newBurger, function() {
    res.redirect("/");
  });
});

//UPDATE
ROUTER.put("/:id", function(req, res) {
 

  BURGER.updateOne(req.params.id, function() {
    res.redirect("/");
  });
});



// Export routes for server.js to use.
module.exports = ROUTER;
