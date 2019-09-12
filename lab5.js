var express = require('express');
var app = express();
//configure the Express app to handle the engine:
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
bodyParser = require('body-parser');//creating instance
//to parse the data coming from POST request, body parser has to be used. 
//Body-parser is installed by using npm install bodyparser --save. 
app.use(express.static('images'));//this is used to serve images or css files
app.use(express.static('css'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.render(__dirname + '/views/index.html');
});

app.get('/index.html', function (req, res) {
    res.render(__dirname + '/views/index.html');
});

app.get('/newTask.html',function(req,res){
    res.render(__dirname + '/views/newTask.html');
});

app.post('/data', function (req, res) {
    console.log(req.body.tname);
    console.log(req.body.tdue);
    console.log(req.body.tdesc);

    var newTask = {
        taskName:req.body.tname,
        taskDue:req.body.tdue,
        taskDesc:req.body.tdesc,
    }
    db.push(newTask);
    res.send('Thank You')
})

app.use(express.static('/listTask.html'))//middleware

let db = [];
db.push({
    taskName: 'Birthday Talent',
    taskDue: '19/12/19',
    taskDesc: 'Celebrate in Class (A)'
});
db.push({
    taskName: 'Birthday Bee',
    taskDue: '09/04/19',
    taskDesc: 'Celebrate at Church (B)'
});
db.push({
    taskName: 'Birthday Natasha',
    taskDue: '24/02/19',
    taskDesc: 'Celebrate in a Club (C)'
});
app.get('/listTask.html', function (req, res) {
    res.render('listTask.html', {username: "Guest", taskDb: db});
    //2 parmeteres that is the html file name(listTask.html) and object with 2 properties that is the usernae and taskDb
});

app.listen(8080);
console.log("Server running at: http://127.0.0.1:8080");
