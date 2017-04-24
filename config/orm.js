const CONNECTION  = require("./connection.js");


// ORM (Object Relational Mapper) 
const ORM = 
{
  //Selects all rows from table
  selectALL: function(table, cb) 
  {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      cb(result);
    });
  },
  // Inserts row into table
  insertOne: function(table, burger, cb) 
  {
    var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [table, burger], function(err, result) {
      cb(result);
    });
  },
  //Updates value of `devoure` to true of row with `id` = id. 
  updateOne: function(table, id,  cb) 
  {
    var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";

    connection.query(queryString, [table, true, id], function(err, result) {
      cb(result);
    });
  }
};

module.exports = ORM;