const { Server } = require("socket.io");

const io = new Server(8080);

io.on("connection", (socket) => {
    socket.emit('hello', "Conectado al servidor");

    socket.on('howdy', (arg) => {
        console.log(arg);
    });
   
    socket.on('news_by_server', function(data){
        if(data==0){
            console.log(data, "no presionado");
        }else{
            console.log(data, "presionado");
        }
    });
});