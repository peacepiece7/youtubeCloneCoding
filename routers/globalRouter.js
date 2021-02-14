import express from "express";
import { postJoin, getJoin, getLogin, postLogin, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

// global Router
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);
// postjoin 실행이 끝나면 postLogin이 실행되는 형식임 ! next() 넣어줘야하고
//get(가지고 올 데이터의 형식, 가지고 올 페이지의 템플릿이름 (home.pug))
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter