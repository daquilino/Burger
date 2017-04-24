const EXPRESS = require("express");
const ROUTER = express.Router();

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

ROUTER.post("/", function(req, res) {
  BURGER.insertOne([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function() {
    res.redirect("/");
  });
});

ROUTER.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  BURGER.updateOne({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});



// Export routes for server.js to use.
module.exports = ROUTER;
