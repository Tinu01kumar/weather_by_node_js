const path =require("path")
const express=require("express")
const hbs=require("hbs")
const app = express();
const port= process.env.PORT || 8000;
//public static path
partials_path=path.join(__dirname,"../templates/partials")
templates_path=path.join(__dirname,"../templates/views")

const staticpath=path.join(__dirname,"../public")
app.set('views', templates_path);
app.set("view engine",'hbs');
hbs.registerPartials(partials_path)

app.use(express.static(staticpath))



//routing
app.get("/" ,(req,res)=>{
    res.render("index")
})
app.get("/about" ,(req,res)=>{
    res.render("about")
})
app.get("/weather" ,(req,res)=>{
    res.render("weather")
})
app.get("*" ,(req,res)=>{
    res.render("404errorpage",{
        errormsg:'oops! page not found'
    })
})
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})