const net = require("net");
const server = net.createServer();

server.on('connection',(socket) => {
    //Se inicia comunicacion con el cliente por socket 
    socket.on('data', (data) => {
        console.log("Mensaje del cliente: "+ data)
        socket.write("Mensaje recibido")
    })
    //Finalizar comunicacion con el cliente 
    socket.on('close', () => {
        console.log("Se finalizo la comunicacion con el cliente")
    })
    //Conexion con errores (por si llegara a fallar)
    socket.on('error', (err) =>{
        console.log("Error de conexion: "+err.message)
    })
})
//inicializa mi servidor
server.listen(3000, () => {
    console.log("Servidor funcionando en: ",server.address().port)
})