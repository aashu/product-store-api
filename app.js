const express = require("express")
const connectDB = require("./db/connect")

require("dotenv").config()
require("express-async-errors")

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const notFoundMiddleWare = require("./middleware/not-found")
const errorHandlerMiddleWare = require("./middleware/error-handler")

const productsRouter = require("./routes/products")
//routes
app.get("/", (req, res) => {
    res.send('<h1>Welcome To Store API</h1><p>visit <a href="/api/v1/products">API</a></p>')
})

// router
app.use("/api/v1/products", productsRouter)

app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleWare)

const port = process.env.PORT || 5000
const dbURL = process.env.MONGO_URI

const start = async() => {
    try{
        await connectDB(dbURL)
        app.listen(port, console.log(`server running on port ${port}`))
    } catch (error) {
        console.log(error) 
    }
}

start() 
