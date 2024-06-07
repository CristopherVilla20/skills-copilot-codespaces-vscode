//create web server
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//get comments
app.get('/comments', function(req, res) {
    fs.readFile(__dirname + '/public/comments.json', 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

//add comments
app.post('/comments', function(req, res) {
    fs.readFile(__dirname + '/public/comments.json', 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile(__dirname + '/public/comments.json', JSON.stringify(comments, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(comments);
        });
    });
});

app.listen(3000, function() {
    console.log('Server is running on localhost:3000');
});
