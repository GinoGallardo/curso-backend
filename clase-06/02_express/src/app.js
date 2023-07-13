import express from 'express';

// declaramos express
const app = express();
const PORT = 8080;

//endpoint - nuestra API
app.get('/saludo', (req, res) => {
  res.send('Hola desde el backend usando Express!')
})

//

const server = app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

module.exports = server;




/* ================================
=             usando req.params
====================================*/

app.get('usuario2/:nombre/:apellido', (req, res)=> {
  console.log(req.params);

  res.send('Hola, tu nombre completo es: ${req.params.nombre}')
})