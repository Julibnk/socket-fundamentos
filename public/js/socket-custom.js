//      Configuración socket front-end
//      Usar var por compatibilidad con navegadores
var socket = io();

//      On es para escuchar del servidor
        socket.on('connect', function () {
            console.log('Conectado al servidor');
        });

        socket.on('disconnect', function() {

            console.log('Desconectado del servidor');

        });

//      Emit para emitir info al servidor
        socket.emit('enviarMensaje', {
            usuario: "Julian",
            mensaje: 'Hola mundo'
        }, function (resp) {
//          Callback despues de que conteste el servidor
            console.log('respuesta server' , resp);
        });

//      Escuchar info del servidor
        socket.on('enviarMensaje', function(mensaje) {
            console.log('Enviado desde servidor', mensaje);
        })
