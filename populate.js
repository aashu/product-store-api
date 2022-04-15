require("dotenv").config()

const connectDB = require("./db/connect")
const MONGO_URI = process.env.MONGO_URI

const product = require("./models/product")
const productsJson = require("./products.json")

const start = async () => {
    try{
        await connectDB(MONGO_URI)
        await product.deleteMany() // remove everything prepopulated in db
        await product.create(productsJson) // populate from product.json
        console.log("Database is populated.")
        process.exit(0)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

start()