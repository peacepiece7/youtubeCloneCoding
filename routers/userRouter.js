import express from "express";
import routes from "/Users/taetae/Desktop/youtubeCloneCoding/routes.js";

const userRouter = express.Router();

// global Router
userRouter.get(routes.users, (req,res) => res.send('users!'));
userRouter.get(routes.userDetail, (req,res) => res.send('userDetail!'));
userRouter.get(routes.editprofile, (req,res) => res.send('editprofile!'));
userRouter.get(routes.changePassword, (req,res) => res.send('changePassword!'));

export default userRouter