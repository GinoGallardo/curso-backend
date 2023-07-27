const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const exphbs = require('express-handlebars');

// Configurar Handlebars como motor de vista
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Configurar carpeta estática para CSS y scripts del lado del cliente
app.use(express.static('public'));

 // Crea una lista de productos (puedes usar una base de datos en su lugar) 
let products = [];

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

// Manejar la desconexión
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
