const fs = require("fs");
const express = require("express");
const app = express()

var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("../bashard001.github.io"))

app.post("/form", function(req, res){
    var newCharacter = req.body;

    console.log(newCharacter);

    

})

app.listen(port, function(){
    console.log("app listening... at port 3000");
})

