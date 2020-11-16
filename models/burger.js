// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  // SELECT all burgers from the database
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  // INSERT a burger
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // UPDATE a burger
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  // DELETE a burger
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
