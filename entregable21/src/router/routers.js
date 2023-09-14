const express = require('express');
const router = express.Router();
const passport = require('passport');

// Ruta para el registro
router.post('/register', passport.authenticate('local', {
    successRedirect: '/products',
    failureRedirect: '/register',
    failureFlash: true
}));

// Ruta para el inicio de sesión
router.post('/login', passport.authenticate('local', {
    successRedirect: '/products',
    failureRedirect: '/login',
    failureFlash: true
}));

// Ruta para la autenticación de GitHub
router.get('/auth/github', passport.authenticate('github'));

// Ruta de callback de GitHub
router.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/products',
    failureRedirect: '/login'
}));

module.exports = router;
