const express = require("express");
// appication = app 에 express()를 실행시킴
const app = express();
//connect app(application) with 3000 port
const PORT = 3000;
function handleListening(){
    console.log(`listening on: http://localhost:${PORT}`);
}
function handleHome(request,responsive){
    console.log(request)
    responsive.send('hellow')
}
app.get('/',handleHome)

app.listen(PORT, handleListening);