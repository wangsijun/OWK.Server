var express = require('express');
var taskRoutes = express.Router();

function index(req,res){
  res.render('./home/index',{title:'Express hello word2'})
}


function attachRoutes(app) {
  taskRoutes['GET'.toLowerCase()]('',index);

  app.use('/', taskRoutes);
}
module.exports = attachRoutes;
