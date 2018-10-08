var mongoose = require('mongoose');
var User = mongoose.model('User',{
    email:{
        type:String,
        trim: true,
        minlength: 1,
        required: true
    }
});

module.exports ={User};
// var userOne = new User({

//     email: 'no@yes.com'

// });

// userOne.save().then((doc)=>{

//     console.log('User Saved', JSON.stringify(doc, undefined, 2));

// }, (err)=>{

//     console.log('Error Saving Document:',err);

// });
