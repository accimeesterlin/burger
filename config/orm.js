const connection = require("./connection");

const orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM restaurant_burger", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },
    selectAllBy: function(condition, value, cb) {
        const sqlQuery = `SELECT * FROM restaurant_burger WHERE ${condition } = ${value}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },
    insertOne: function (burgerName, cb) {
        const sqlQuery = `INSERT INTO restaurant_burger(burger_name) VALUES('${burgerName}')`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    updateOne: function (condition, id, cb) {
        const sqlQuery = `UPDATE restaurant_burger SET is_favorite = ${condition} WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },

    deleteOne: function(id, cb) {
        const sqlQuery = `DELETE FROM restaurant_burger WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    }
};

module.exports = orm;

