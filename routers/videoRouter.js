import express from "express";
import { deleteVideo, editVideo, getUpload,postUpload, videoDetail, videos } from "../controllers/videoController";
import routes from "../routes";
import {uploadVideo} from"../middleware"

const videoRouter = express.Router();

videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload,uploadVideo, postUpload);
videoRouter.get(routes.videos,videos);
videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);
videoRouter.get(routes.videoDetail(),videoDetail);

export default videoRouter