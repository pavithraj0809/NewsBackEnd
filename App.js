const express=require('express');
const path=require('path')
const mongoose=require('mongoose');
const cors=require('cors');
const port=4000;
const app=express();
const router=require('./router/router')
const newsrouter=require('./router/newsrouter')

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(cors({orgin:"*"}))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/user",router);
app.use("/content",newsrouter);

mongoose.connect('mongodb://localhost:27017').then((req,res)=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.log("Error occured In DB");
})
app.listen(port,()=>{
    console.log("Server started at port")
})

