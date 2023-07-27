import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewRouter from './routes/view.router.js'
import Server from 'socket.io';

const app = express();
const PORT = 9090;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Confi de handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + "/public"));


const httpServer = app.listen(PORT, () => {
    console.log("Server run on port: " + PORT);
})

// delclaramos el router
app.use('/', viewRouter);

//Instaciomos soket.io
const socketServer = new Server(httpServer);

socketServer.on('connection', socket =>{
    console.log("Nuevo cliente conectado");

    socket.on("mensajeKey", data => {
        console.log(data);
    })

    socket.emit ('msg_02', "mensaje desde el back")

    socket.broadcast.emit
    ('evento_para_todos_los_clientes', "este mensaje es para todos los socket, menos del que esta emitiendo")
})



