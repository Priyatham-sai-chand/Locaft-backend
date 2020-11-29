const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    username: {
            type: String,
            required: true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    phonenumber: {
        type: Number,
        required: true

    },
    password: {
        type:String,
        required:true,
        minlength: 5
    }

});

module.exports = User = mongoose.model('user',UserSchema);