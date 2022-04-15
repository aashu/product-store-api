const Product = require("../models/product")
const getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({msg: products, nbHits: products.length})
}

const getProduct = async(req, res) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json({product})
}

const createProduct = async (req, res) => {
    const newProduct = await Product.create(req.body)
    res.status(200).json({newProduct})
}
// require id to update product
const updateProduct = async (req, res) => {
    await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    res.status(200).json({msg: "Updation succesful"})
}

const deleteProduct = async(req, res) => {
    await Product.findOneAndRemove(req.params.id, {new: true})
    res.status(200).json({msg: "deletion successful!"})
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct
}