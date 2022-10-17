const express=require("express");
const app=express();
const path=require("path");

require("./db/conn");
const Information=require("../src/db/conn")
const port=process.env.PORT || 3000;

// var mongoose=require('mongoose');
// mongoose.connect("mongodb://localhost/Registration",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

// var db=mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){
//     console.log("connection seccussful");
// })

const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path));
//cc


app.set('view engine','pug');
app.set('views',path.join(__dirname,'../views'));
// console.log(path.join(__dirname,"../public"));

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    // res.send("hello this is faruk abdulla");
    res.render("register.pug");


});

app.post("/",function(req,res){
    let Info=new Information({
     Name:req.body.Name,
     DOB:req.body.DOB,
     PhNumber:req.body.PhNumber,
     Email:req.body.Email,
     Address:req.body.Address,
     LicenseNo:req.body.LicenseNo,
     AdharNo:req.body.AdharNo,
     Brand:req.body.Brand,
     Model:req.body.Model,
     Color:req.body.Color,
     CarNo:req.body.CarNo,
     Modifications:req.body.Modifications,
     Payment:req.body.Payment,
     DatedSigned:req.body.DatedSigned,
     terms:req.body.terms,
 
    });
    Info.save();
    res.render("index.pug");
 
    
 });


app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
});
