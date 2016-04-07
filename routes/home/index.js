var express = require('express');
var content = require('../../resource/home/index.source.js');
var user1 = require('../../db_sql/text/user-ms.js');
var taskRoutes = express.Router();

function index(req,res){
    var u = new user1();
    u.getUserDetails(1,function(err,data){
        var values={
            module:{
                sayhello:'你好啊'+data[0].FirstName+ data[0].LastName
            }
        };
        res.render('./home/index',{key:content,values:values});
    });
}

function attachRoutes(app) {
    taskRoutes['GET'.toLowerCase()]('',index);

    app.use('/', taskRoutes);
}
module.exports = attachRoutes;
