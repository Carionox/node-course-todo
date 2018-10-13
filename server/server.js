//__v tracks model changes.
// var {mongoose} = require('./db/mongoose.js');

var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
const {findTodoById} = require('../playground/mongoose-queries');
var{Todo} = require('./models/todo');
var{User} = require('./models/user');



var app = express();

app.use(bodyParser.json());

app.listen('3000', ()=>{

    console.log('Running on port 3000');

});

app.get('/todos/:id',(req, res)=>{
    var id= req.params.id;
    if(!ObjectID.isValid(id)){

        return res.status(404).send();
    
    }
    
    
    findTodoById(id).then((todo)=>{
            
        if(!todo){

            return res.status(404).send({});

        }

        res.send({todo});

    }).catch((e)=>{
        
        res.status(400).send();
    
    });

// ID VALID, error is 404
//findById
//success if todo send back
//        if no todo
//error 400 no body
});


app.post('/todos',(req, response)=>{

     createTodo(req.body.text, response);
    
});

app.get('/todos',(req, res)=>{
    Todo.find({}).then((todos)=>{

        res.send({todos});

    }, (e)=>{

        res.status(400).send(e);

    });
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