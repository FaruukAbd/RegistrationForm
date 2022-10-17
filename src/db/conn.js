// const mongoose=require("mongoose");

// mongoose.connect("mongodb://localhost:27017/Registration",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreatIndex:true
// }).then(()=>{
//     console.log("connection seccessful");
// }).catch((e)=>{
//     console.log(`no connection`);
// })

var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/Registration",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("connection seccussful");
});

const registrationSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        required:true
    },
    PhNumber:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    LicenseNo:{
        type:String,
        required:true
    },
    AdharNo:{
        type:Number,
        required:true
    },
    Brand:{
        type:String,
        required:true
    },
    Model:{
        type:Number,
        required:true
    },
    Color:{
        type:String,
        required:true
    },
    CarNo:{
        type:String,
        required:true
    },
    Modifications:{
        type:String,
        required:true
    },
    Payment:{
        type:String,
        required:true
    },
    
    DatedSigned:{
        type:Date,
        required:true
    },
    terms:{
        type:String,
        required:true
    },

})

const Information=new mongoose.model("Participant",registrationSchema);
module.exports=Information;
