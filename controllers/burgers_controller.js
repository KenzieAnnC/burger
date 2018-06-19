var burger = require("../models/burger.js");

var express = require('express');
var router = express.Router();

router.get("/", function(request, response) {

    burger.all(function(data) {
      var hbsObj = {
        burgers: data
      };
      response.render("index", hbsObj);
    });
  });
  
  router.post("/api/burgers/", function(request, response) {
    
    burger.createOne([
      "burger_name"], [request.body.burger_name],
      function(data) {
      response.redirect("/");
    });
  });
  
  router.put("/api/burgers/:id", function(request, response) {
    
    var condition = "id = " + request.params.id;
    burger.updateOne({
      isDevoured: true
    }, condition, function(data) {
      response.redirect("/");
    })
  });
  
  module.exports = router;

