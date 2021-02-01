import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useFindAndModify: false
}
);

const db = mongoose.connection
const handleOpen = () => console.log("🙃connect to db!")
const handleError = (error) => console.log(`👺Error on DB connection:👺${error}`)

db.once("open",handleOpen)
db.on("error",handleError)