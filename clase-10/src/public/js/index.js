const socket = io();

socket.emit('mensajeKey', "Hola desde el cliente")

socket.on('msg_02', data => {
  console.log(data);
})

socket.on('evento_para_todos_los_clientes', data => {
  console.log(data);
})