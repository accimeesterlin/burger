var connection = require("./connection");

var orm = {
  selectAll: function (cbd) {
      connection.query("SELECT * FROM burgers", function (err, data) {
          if(err){
              throw err;
          }
          cbd(data);

      });

      // connection.end();
  },
    insertOne: function (name, devoured, date) {
        connection.query("INSERT INTO burgers(burger_name, devoured, date) VALUES(?, ?, ?)", [name, devoured, date], function (err, data) {
            if(err) throw err;
            console.log("Date has successfully posted to the Database!");
        });
    },

    updateOne:function (condition, id) {
        connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [condition, id], function (err, data) {
            if(err) throw err;
            console.log("Data has been updated!");
        });
    }
};

module.exports = orm;

