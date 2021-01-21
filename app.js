import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import {userRounter} from "./rounter"

const app=express();

const handleHome = (request,responsive) => responsive.send('hellow this page is my ass')

const handleProfile = (req,res) => res.send('hellow from profile')

app.use(morgan("dev"));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(helmet())

app.get('/',handleHome);

app.get('/profile',handleProfile);

app.use("/user",userRounter);

export default app;
