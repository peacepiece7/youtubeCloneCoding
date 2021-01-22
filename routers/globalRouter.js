import express from "express";
import routes from "/Users/taetae/Desktop/youtubeCloneCoding/routes.js";

const globalRouter = express.Router();

// global Router
globalRouter.get(routes.home, (req,res) => res.send('Home!'));
globalRouter.get(routes.search, (req,res) => res.send('search!'));
globalRouter.get(routes.join, (req,res) => res.send('join!'));
globalRouter.get(routes.login, (req,res) => res.send('login!'));
globalRouter.get(routes.logout, (req,res) => res.send('logout!'));

// User Router
//globalRouter.get(routes.users, (req,res) => res.send('users!'));
//globalRouter.get(routes.userDetail, (req,res) => res.send('userDetail!'));
//globalRouter.get(routes.editprofile, (req,res) => res.send('editprofile!'));
//globalRouter.get(routes.changePassword, (req,res) => res.send('changePassword!'));


// video Router
//globalRouter.get(routes.videos, (req,res) => res.send('videos!'));
//globalRouter.get(routes.upload, (req,res) => res.send('upload!'));
//globalRouter.get(routes.videoDetail, (req,res) => res.send('videoDetail!'));
//globalRouter.get(routes.editVideo, (req,res) => res.send('editVideo!'));
//globalRouter.get(routes.deleteVideo, (req,res) => res.send('deleteVideo!'));


export default globalRouter