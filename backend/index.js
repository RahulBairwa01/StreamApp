const connectToMongo =require('./db');
const express = require('express')
var cors = require('cors')
const path = require('path')

connectToMongo();
const app =express();
const port =5000;

app.use(cors())
app.use(express.json())
//use routes with intial url
app.use('/api/auth',require('./routes/auth'))
app.use('/api/media',require('./routes/media'))
app.use('/api/history',require('./routes/history'));

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(port,()=>{
    console.log(`stream backend listening at http://localhost:${port}`)
})