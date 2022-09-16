"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
// console.log(process.env.NODE_ENV);
// console.log(process.env.DB_HOST);
app.use(express.static('dist'));
//handler
app.get("/env", function (req, res) {
    res.json({
        environment: process.env.NODE_ENV
    });
});
app.get("/db-env", function (req, res) {
    res.json({
        "db-host": process.env.DB_HOST
    });
});
app.get("/hola", function (req, res) {
    res.json({
        message: "hola soy el servidor,heroku"
    });
});
// app.use(express.static("dist"));// se encarga de la ruta del back y del front
// // * significa que responda con la ruta
// app.get("*",(req,res)=>{
//     res.sendFile(__dirname+"/dist/index.html")
// })
app.listen(port, function () {
    console.log("hola soy express y estoy corriendo en el puerto " + port);
});
// class User{
//     nombre:string;
//     getNombre(){
//         return this.nombre;
//     }
// }
// const gaston = new User()
// gaston.nombre ="gaston zacarias";
// console.log(gaston.getNombre())
