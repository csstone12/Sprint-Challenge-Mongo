const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    
    budget: [{ type: ObjectId, ref: 'Budget' }],
    category: [{ type: ObjectId, ref: 'Category' }],
});


module.exports = mongoose.model('category', categorySchema);