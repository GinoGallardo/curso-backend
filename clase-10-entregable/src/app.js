import express from 'express';
import exphbs from 'express-handlebars';
import __dirname from './path/to/this/module.js';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const http = createServer(app);
const io = new Server(http);

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config de handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// Config para websocket
app.use(express.static(__dirname + 'public'));

 // Crea una lista de productos (puedes usar una base de datos en su lugar) 
let products = [];

app.use('/', indexRouter);
// Configurar rutas
app.get('/', (req, res) => {
  res.render('index', { products });
});

app.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts', { products });
});

// Inicia el servidor
const port = 3000;
http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Conexión Socket.IO 
io.on('connection', (socket) => {
  console.log('A user connected');

// Envía la lista de productos al cliente al conectar 
  socket.emit('initialProducts', products);

  // Recibe un nuevo producto del cliente
  socket.on('addProduct', (product) => {
    products.push(product);
    // Transmite la lista de productos actualizada a todos los clientes conectados
    io.emit('updatedProducts', products);
  });

 // Recibe la solicitud de eliminación del producto del cliente
  socket.on('removeProduct', (productId) => {
    products = products.filter((product) => product.id !== productId);
     // Difundir la lista de productos actualizada a todos los clientes conectados 
    io.emit('updatedProducts', products);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
