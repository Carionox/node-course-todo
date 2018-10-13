const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user'); 

// var _id = '5bbdbddd64574f3ac8f95600';
// var _id = '5bb95b9bd803ee23285a860c';

// if(!ObjectID.isValid(_id)){

//     console.log('ID specified is INVALID');

// }

// Todo.find({

//     _id: _id

// }).then((todos)=>{

//     console.log('Todos', todos);

// });

// Todo.findOne({

//     _id: _id

// }).then((todo)=>{

//     console.log('Todo', todo);

// });

// Todo.findById(_id).then((todo)=>{
//     if(!todo){

//         return console.log('ID not found');

//     }
//     console.log('Todo By ID', todo);

// }).catch((e)=>{console.log(e)});

// User.findById(_id).then((user)=>{

//     if(!user){

//         return console.log('No such user EXISTS');

//     }

//     console.log('User Found', JSON.stringify(user));

// }, (e)=>{console.log(e)});

findTodoById = (_id)=>{
    return Todo.findById(_id);
};

module.exports = {findTodoById};