const { log } = require('console');
const http = require('http');

// creamos el server
const server = http.createServer((request, response) => {
  response.end('Mi primer hola mundo desde el server con modulo nativo HTTP!!!, actualizando con NODEMON')
})


// confi puerto de escucha
app.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
})