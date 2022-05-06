var express = require('express');
var router = express.Router();
var moongoose = require('moongoose');

var Autos = require('../modelos/autos');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Autos.find({}, (err,data)=>{
    res.status(200).json(data);
  });
});

module.exports = router;
