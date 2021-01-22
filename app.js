import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./routes"
import globalRouter from "./routers/globalRouter"
import videoRouter from "./routers/videoRouter"
import userRouter from "./routers/userRouter"

const middleG = (req,res,next) => {
    console.log('global used!!!!!')
    next()
}
const middleV = (req,res,next) => {
    console.log('video used!!!!!')
    next()
}
const middleU = (req,res,next) => {
    console.log('user used!!!!!')
    next()
}


const app = express();

//express.Router().get("/test",(req,res) => res.send('test router'));

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));



app.use(routes.home,middleG,globalRouter);
app.use(routes.videos,middleV,videoRouter);
app.use(routes.users,middleU,userRouter)


export default app;
