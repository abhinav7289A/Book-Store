import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bookRoute from "./Routes/bookRoute.js"
import userRoute from "./Routes/userRoute.js"
import cors from "cors"
import { login } from "./controller/userController.js"
const app = express()
app.use(cors())
app.use(express.json()) //it will parse the data from body in the format of json otherwise it will not be saved in  database

dotenv.config()



const PORT = process.env.PORT || 4000
const DB_URI = process.env.Mongo_DB_URI

//connection to mongo db
try {
    mongoose.connect(DB_URI)
    console.log("Connected to mongoDB")
} catch (error) {
    console.log("Error: ", error)
}

//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)


app.get("/", (req, res)=> {
    res.send("BookStore Website");
})

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})