const express = require('express')
const server = express();
server.use(express.urlencoded({extended: true}));
server.use(express.json())


server.listen(8080,()=>{
    console.log("Escuchando servidor en el puerto 8080")
})


