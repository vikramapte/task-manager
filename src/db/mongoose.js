const mongoose = require('mongoose');
const validator = require('validator');

const connectionURL = `mongodb://127.0.0.1:27017`;
const database = `task-manager-api`;

mongoose.connect(`${connectionURL}/${database}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error(`Age must be a positive number`);
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error(`Incorrect password: cannot use word 'Password' as password`);
            }
        }
    }
});

// const me = new User({
//     name: '   Vikram Apte   ',
//     email: ' APTEVIKU@GMAIL.COM    ',
//     password: 'Phone@98'
// });

// me.save()
//     .then(() => {
//         console.log(me);
//     })
//     .catch((error) => {
//         console.log(`Error! ${error}`)
//     })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },

    completed: {
        type: Boolean,
        default: false
    }
});

const washClothsTask = new Task({
    description: '   check emails     ',
    
});

washClothsTask.save()
    .then(() => {
        console.log(washClothsTask);
    })
    .catch((error) => {
        console.log(`Error! ${error}`);
    })



