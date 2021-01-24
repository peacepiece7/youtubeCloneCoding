import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import globalRouter from "./routers/globalRouter"
import helmet from "helmet";
import { localMiddleware } from "./middleware";
import morgan from "morgan";
import routes from "./routes"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"

const app = express();

app.set("view engine","pug")

app.use(helmet());
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan("dev"));


app.use(localMiddleware)
app.use(routes.home,globalRouter);
app.use(routes.videos,videoRouter);
app.use(routes.users,userRouter)


export default app;
