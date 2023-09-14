const bcrypt = require('bcrypt');

// Dentro de la ruta de registro
const password = req.body.password;
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    // Guarda el hash en la base de datos en lugar de la contraseña en texto plano
});
