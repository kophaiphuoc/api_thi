const express = require('express');
const app = express();
const cors = require('cors');
const mongosee = require('mongoose');
const morgan = require('morgan');
const dotenv    = require('dotenv');
dotenv.config();

const productarouter = require("./routers/productapi");

    mongosee.connect(process.env.mongo_url,()=>{
        console.log("mongosee connect successfully");
    });
app.use(cors());
app.use(morgan("common"));
app.get("/api",(req,res,next)=>{
    res.status(200).json("xin chào mọi người");
});

app.use("/student",productarouter);
app.listen(process.env.PORT||9999,()=>{
    console.log("listening on port ");
});