const socket = io();

socket.emit('mensajeKey', "hola desde el cliente hacia el back")

socket.on('addProduct', (data) => {})

socket.on('mensajeKeyBack', (data) => {
  console.log(data);
})