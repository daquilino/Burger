// Import the ORM to create functions that will interact with the database.
const ORM = require("../config/orm.js");

const BURGER = {
  selectAll: function(cb) {
    ORM.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger, cb) {
    ORM.insertOne("burgers", burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgerId, cb) {
    ORM.updateOne("burgers", burgerId, function(res) {
      cb(res);
    });
  }

 


};

// Export the database functions for the controller (catsController.js).
module.exports = BURGER;