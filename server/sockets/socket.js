const { io } = require('../server')

// Recupera info de la conexion del cliente
io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: "Admin",
        mensaje: "Bienvenido madafaka"

    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar al cliente
    //Recive un callback definido en el front que se puede ejecutar 
    client.on('enviarMensaje' , (data , callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje' , data)

        // if (message.usuario ){
        //     callback({
        //         resp: "TODO OK"
        //     });
        // } else{
        //     callback({
        //         resp: "TODO MAAAAAAAL "
        //     })
        // }

        

    })

});