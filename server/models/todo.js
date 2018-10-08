var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{//Model defines a contructor

    text:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }

});

module.exports = {Todo};
// var otherTodo = new Todo({

//     text:' COmplete Level ',
    
// });

// otherTodo.save().then((doc)=>{
//     console.log('Saved To do', doc);
// },(e)=>{console.log('Unable to save doc');})