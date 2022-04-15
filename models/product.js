const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is Required"]
    },
    price: {
        type: Number,
        required: [true, "Product Price is Requirede"]
    },
    featured: { 
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 2.5
    },
    createdTimeStamp: {
        type: Date,
        default: Date.now()
    },
    company: String
})

const product = mongoose.model('Product', productsSchema)

module.exports = product