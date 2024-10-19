const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('product', productSchema);