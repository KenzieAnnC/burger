var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(response) {
        cb(response);
      });
    },
    create: function(name, cb) {
      orm.create("burgers",["burger_name", "devoured"], [name, false], cb)
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(response) {
        cb(response);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(response) {
        cb(response);
      });
    }
  };
  
  module.exports = burger;