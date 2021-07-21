var express = require("express");

var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();



app.use(bodyParser.json());
app.use(express.static('public')) 
app.use(bodyParser.urlencoded({
    extended:true
}))

 
// ALL DATABASE SPECIFIC STUFF
mongoose.connect('mongodb://localhost:27017/vajirj', { useNewUrlParser: true ,useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error',()=>console.log("Error to connecting database"));
db.once('open',()=>console.log("Connected to database"));



app.post('/sign_up', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var number = req.body.number;
    var message = req.body.message;

    var data = {
        "name":name,
        "email":email,
        "number":number,
        "message":message
    }

    db.collection('user').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted");
    });
    return res.redirect('index.html')    
    // return console.log("ok");
    
});
 

app.get("/",(req,res)=>{ 
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html');
}).listen(80);

console.log("Listening on PORT 80");
