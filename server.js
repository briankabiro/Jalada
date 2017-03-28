var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
/* 
	Use router below to effect changes
	home page, write page, login page, readPost page, account page, 
*/
app.get('/', function(){
	res.sendFile('./index.html')
})

app.get('/login', function(){
	res.sendFile('./login.html')
});


app.get('./write', function(){
	res.sendFile('./write.html')
});

app.get('./post')