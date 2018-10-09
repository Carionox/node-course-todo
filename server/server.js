//__v tracks model changes.
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var{Todo} = require('./models/todo');
var{User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.listen('3000', ()=>{

    console.log('Running on port 3000');

});

app.post('/todos',(req, response)=>{

     createTodo(req.body.text, response);
    
});

var createTodo = (taskText, res)=>{

    var newTodo = new Todo({

        text: taskText

    });

    newTodo.save().then((r)=>{

        res.send(r);

    }, (e)=>{

        res.status(400).send(e);

    });
};

module.exports = {app};