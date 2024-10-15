const net = require('net')
const readline = require('readline-sync')
//Crear servidor con una lista de parametros
const servidor = {
    port:3000, 
    host: 'localhost'
}

const client = net.createConnection(servidor);

client.on('connect', () => {
    console.log('Conexion exitosa')
    //Agregar la funcion para escribir al server
    sendLine()
})

//Recibir un mensaje de servidor
client.on('data', (data)=>{
    console.log('El mensaje del servidor es: ',data.toString())
    sendLine()
})

//Mostrar errores de conexion 
client.on('error', (err)=>{
    console.log("Error de conexion: ",err.message)
})

//lee lo que el usuario escribe para enviar al server
function sendLine(){
    var line = readline.question('Introduce el mensaje: \n')
    if(line == 0){
        client.end() //Finaliza la comunicacion con el server 
    }
    else{
        client.write(line) //Envia el mensaje lo que escribio el usuario
    }
}
