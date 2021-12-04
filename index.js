const http = require("http")
const server = http.createServer((req,res)=>{
    //lo que se manda el servidor al clientes o navegador
    res.end("estoy respondiendo a la solicitud")

    //lo que recibe el servidor del cliente o navegador,
    //aunque se vuelva a cargar la pagina
    console.log(req)
})


const puerto = 3000;

server.listen(puerto,()=>{
    console.log("esperando solicitudes solicitudes")
})