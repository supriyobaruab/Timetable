const express = require('express');
const app = express();
app.use(express.json());
app.set("view engine","ejs");
app.use(express.static("./public"));
app.get('/',(req,res)=>{
    res.render("index");
})
app.listen(8080,()=>{
    try{
        console.log("App is listening at 8080");
    }catch(err){
        console.log(err.message);
    }
})