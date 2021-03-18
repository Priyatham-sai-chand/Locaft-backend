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
    },
    pricing: {
        type:String,
        enum: ['free','basic','intermediate','luxury'],
        default:'free',
        required:false
    }

});

module.exports = User = mongoose.model('user',UserSchema);