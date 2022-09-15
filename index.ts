import * as express from "express"

const app = express()
const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);
console.log(process.env.DB_HOST);

app.get("/env", (req, res) => {
    res.json({
        environment: process.env.NODE_ENV,
    });
});

app.get("/db-env", (req, res) => {
    res.json({
        "db-host": process.env.DB_HOST,
    });
});





app.get("/hola", (req, res) => {
    res.json({
        message: "hola soy el servidor,heroku",
    });
});

app.listen(port, () => {
    console.log("hola soy express y estoy corriendo en el puerto " + port)
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