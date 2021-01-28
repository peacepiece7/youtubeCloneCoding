import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { localMiddleware } from "./middleware";
import morgan from "morgan";
import routes from "./routes"
import userRouter from "./routers/userRouter.js"
import globalRouter from "./routers/globalRouter.js"
import videoRouter from "./routers/videoRouter"

const app = express();

app.set("view engine","pug")

app.use(helmet());
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan("dev"));

const contentSecurityPolicy = (req,res,next) => {
    res.setHeader("Content-Security-Policy","script-src 'self' https://archive.org");
    next()
}
app.use(contentSecurityPolicy)


app.use(localMiddleware)

app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);


export default app;
