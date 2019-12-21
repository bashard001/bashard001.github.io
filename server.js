const fs = require("fs");
const express = require("express");
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

app.post("/form", function(req, res){
    var newCharacter = req.body;

    console.log(newCharacter);

    

})

app.listen(3000, function(){
    console.log("app listening... at port 3000");
})

