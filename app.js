const express=require("express");
const app=express();

const fs=require("fs");
 let store=JSON.parse(fs.readFileSync("./data/store.json"))  ;


//GET  -api/store
app.get("/api/v1/store",(req,res)=>{
      res.status(200).json({
        status:"success",
        count:store.length,
        data: {
             store:store
        }
      })
})
// Create server
const port=8080;
app.listen(port,()=>{
      console.log("server has started....")
})