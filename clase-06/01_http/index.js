// const { log } = require('console');
const http = require('http');

// creamos el server
const server = http.createServer((request, response) => {
  response.end('Mi primer hola mundo desde el server con modulo nativo HTTP!!!, actualizando con NODEMON')
  // el .end es para enviar la respuesta del
  // servidor hacia el cliente
})


// confi puerto de escucha
server.listen(8080, () => {
  console.log(`Server run on port: 8080`);
})