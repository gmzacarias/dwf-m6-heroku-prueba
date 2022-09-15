import * as express from "express"

const app = express()
const port = process.env.PORT||3000;


app.get("/hola",(req,res)=>{
    res.json({
        message:"hola soy el servidor",
    });
});

app.listen(port,()=>{
    console.log("hola soy express y estoy corriendo en el puerto "+port)
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