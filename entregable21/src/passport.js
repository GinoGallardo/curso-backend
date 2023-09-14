const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github').Strategy;

// Configurar estrategia local para iniciar sesión
passport.use(new LocalStrategy({
    usernameField: 'email', // Campo del formulario para el correo
    passwordField: 'password', // Campo del formulario para la contraseña
    passReqToCallback: true
}, (req, email, password, done) => {
    // Aquí puedes usar bcrypt para verificar la contraseña
    // Luego, busca el usuario en tu base de datos y llama a done con el usuario o null
}));

// Configurar estrategia de GitHub
passport.use(new GitHubStrategy({
    clientID: 'tu_client_id',
    clientSecret: 'tu_client_secret',
    callbackURL: 'http://localhost:3000/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Aquí puedes buscar o crear el usuario en tu base de datos y llamar a done con el usuario
}));

passport.serializeUser((user, done) => {
    // Serializa al usuario (generalmente solo se guarda el ID)
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Deserializa al usuario por ID y obtiene sus datos de la base de datos
    // Llama a done con el usuario
});

module.exports = passport;
