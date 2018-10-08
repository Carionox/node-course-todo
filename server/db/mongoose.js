const mongoose  = require('mongoose');

mongoose.Promise = global.Promise; //Mongoose can use third party libraries 
mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true});

module.exports ={mongoose};