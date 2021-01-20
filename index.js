import express from "express";
import morgan from "morgan";
import helmet from "helmet";
// appication = app 에 express()를 실행시킴
const app=express();
//connect app(application) with 3000 port
const PORT=3000;
const handleListening=()=>console.log(`listening on: http://localhost:${PORT}`);

const handleHome=(request,responsive)=>{
    console.log(request)
    responsive.send('hellow this page is my ass')
}
// arrow function 이라고함 function쓰지말고 이거 쓰면 되는 듯
const handleProfile=(req,res)=>res.send('hellow from profile')
app.use(morgan("dev"));
app.get(helmet())
app.get('/',handleHome);
app.get('/prfile',handleProfile);

app.listen(PORT, handleListening);