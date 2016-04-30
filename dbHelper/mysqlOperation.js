/**
 * Created by wangsijun on 2016/4/6.
 */
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin000',
    database: 'bsi',
    port: '3306'
});
var mysqlOperation = function() {
    return this.prototype = {
        query:query
    }
};

function query(sql,params,callback){
    conn = mysql.createConnection(conn.config);
    conn.connect();
    conn.query(sql, function (err, rows, fields) {
        if (err)
        {
            callback(err,null);
        }else{
            var result =new Array();
            for(var value in rows){
                var row = {};
                for(var key in fields){
                    row[fields[key].name] = rows[value][fields[key].name];
                }
                result.push(row);
            }
            callback(null,result);
        }
    });
    conn.end();
};

module.exports = mysqlOperation;
