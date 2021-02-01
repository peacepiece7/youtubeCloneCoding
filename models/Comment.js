import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    text:{
        type:String,
        required:"Text is Requried"
    },
    createdAt:{
        type:Date,
        defalt:Date.now
    }
})

const model = mongoose.model("Comment",CommentSchema);
export default model;