const express = require("express");
const router=require("./routes/route")

const  app=express();
app.use(express.json());
const PORT =process.env.PORT|| 5000;

app.use('/api',router)
 

 app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
 })