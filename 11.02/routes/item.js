var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'item'
})

/* GET home page. */
router.post('/append', function(req, res, next) {
	
	con.query('SELECT * FROM demo',function(err,rows){
		res.header('Access-Control-Allow-Origin','*')
		res.send(rows)
	})
});

router.post('/datail', function(req, res, next) {
	var x=req.body.a;
	var y=req.body.b;
	con.query('INSERT INTO demo (name,datail) VALUES ("'+x+'","'+y+'")',function(err,rows){
		res.header('Access-Control-Allow-Origin','*')
		res.send(rows)
	})
});

module.exports = router;
