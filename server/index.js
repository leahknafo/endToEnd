
const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
var mysql = require('mysql');
app.use(cors());
app.use(express.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "endToEnd"
});

app.post('/contact', function (req, res) {
    console.log(req.body);
    con.connect(function (err) {
        var sql = "INSERT INTO `contact` (`name`, `email`, `phone`) VALUES ?";
        con.query(sql, req.body, function (err, result) {
        if (err) throw err;
    res.send('sent');
});
    })
})

app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});