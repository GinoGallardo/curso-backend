const socket = io();

const product = [
  { name: "pizza",price: 200,id: 1},
  { name: "hamburguesa",price: 150,id: 2},
  { name: "papas fritas",price: 100,id: 3},
  { name: "papas fritas",price: 100,id: 4}
  ];
  socket.emit('mensaje', "hola desde el cliente")

socket.emit('mensajeKey', "hola desde el cliente hacia el back")

socket.on('mensajeKeyBack', (data) => {
  console.log(data);
})
