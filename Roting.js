const   express=require("express");
const app=express();
const port=8080;

//Home page
app.get("/",(req,res)=>{
      res.send("this hom epage")
});
//About 
app.get("/about",(req,res)=>{
      res.send("about page")
})

 //product

 app.get("/product",(req,res)=>{
        res.send("Product page")
 })

 //Contact
 app.get("/contact",(req,res)=>{
       res,send("Contact page")
 })


app.listen(port,()=>{
  console.log("this is hom epages")
})


