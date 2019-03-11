
const express = require('express');
const cors = require('cors');
const PORT = 8888;

const app = express();
var mysql = require('mysql');
app.use(cors());
app.use(express.json());

var http = require('http').Server(app);
var io = require('socket.io')(http);



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "endToEnd"
});

con.connect(function (e, d) {
    if (e) console.log(e)
    console.log('con success');
})

app.post('/contact', function (req, res) {
    console.log(req.body);

    let sql = "INSERT INTO contact SET?"
    con.query(sql, req.body, function (err, result) {
        if (err) throw err;
        res.send('sent');

    })
})

app.post('/recipe', function (req, res) {
    console.log(req.body);

    let sql = "INSERT INTO recipe SET?"
    con.query(sql, req.body, function (err, result) {
        if (err) throw err;
        res.json("ok");

    })
})

app.get('/contact', function (req, res) {

    con.query("SELECT * FROM contact", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });

});

app.get('/recipe', function (req, res) {

    con.query("SELECT * FROM recipe", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);

    });
});

io.on('connection', function (socket) {
    console.log('a user connected');
    const recipeArray=[];

    socket.on('message', function (msg) {
        console.log('message: ' + msg);
        recipeArray.push(msg)
        socket.emit('message', recipeArray, {for:"everyone"});
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});