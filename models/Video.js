import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl:{
        type: String,
        required:"File URL is required"
    },
    title:{
        type:String,
        required:"title is required"
    },
    description:String,
    views:{
        type:Number,
        default:0
    },
    ceatedAt:{
        type:Date,
        default:Date.now
    },
    comments:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"comment"
    }
]
})

const model = mongoose.model("Video", VideoSchema);

export default model