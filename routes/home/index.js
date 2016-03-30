var express = require('express');
var content = require('../../resource/home/index.source.js');
var taskRoutes = express.Router();

function index(req,res){
    var values={
        module:{
            sayhello:'你好啊'
        }
    };
    res.render('./home/index',{key:content,values:values});

}

function attachRoutes(app) {
    taskRoutes['GET'.toLowerCase()]('',index);

    app.use('/', taskRoutes);
}
module.exports = attachRoutes;
