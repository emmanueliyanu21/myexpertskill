const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({


    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        default: 'public'
    },

    email: {
        type: String,
        require: true
    },

    phonenumber: {
        type: String,
        require: true
    },

    gender: {
        type: String,
        require: true
    },

    country: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    confirmPassword: {
        type: String,
        require: true
    },

});

UserSchema.methods.testMethod = function() {

};

module.exports = mongoose.model('users', UserSchema);