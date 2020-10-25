const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Category = mongoose.model('Cotegory', categorySchema);

module.exports = Category;