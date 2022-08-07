const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This fild is required.'
    },
    discription: {
        type: String,
        required: 'This fild is required.'
    },
    email: {
        type: String,
        required: 'This fild is required.'
    },
    ingredients: {
        type: Array,
        required: 'This fild is required.'
    },
    category: {
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
        required: 'This fild is required.'
    },
    image: {
        type: Array,
        required: 'This fild is required.'
    }
});
module.exports = mongoose.model('Recipe', categorySchema);