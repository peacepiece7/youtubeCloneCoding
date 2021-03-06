import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import passport from "passport"
import MongoStore from "connect-mongo"
import mongoose from "mongoose"
import { localMiddleware } from "./middleware";
import morgan from "morgan";
import routes from "./routes"
import userRouter from "./routers/userRouter.js"
import globalRouter from "./routers/globalRouter.js"
import videoRouter from "./routers/videoRouter"
import session from "express-session"
import "./passport"


const app = express();

const CokieStore = MongoStore(session)

app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use('/static', express.static('static'));
app.use(helmet())
app.use(function (req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next()
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        stor: new CokieStore({ mongooseConnection: mongoose.connection })
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(localMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
