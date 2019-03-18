
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
    sqlRecpeiesOps.insert(req.body, function(err, response) {
        if (err) {
            res.status(500).send('error');
        } else {
            res.status(200).res('inserted');
        }
    })
})

const sqlRecpeiesOps = {
    insert: function(data, callback) {
        let sql = "INSERT INTO recipe SET ?"
        con.query(sql, data, function (err, result) {
            if (err) {
                callback(err);
            }
            callback(null, 'ok');
    
        })
    }
}

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
    socket.emit('message', recipeArray, {for:"everyone"});
    socket.on('message', function (msg) {
        sqlRecpeiesOps.insert(msg, function(insertErr, insertResponse) {
            if (insertErr) {

            } else {
                console.log('message: ' + msg);
                recipeArray.push(msg)
                socket.emit('message', recipeArray, {for:"everyone"});
            }
        });
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});