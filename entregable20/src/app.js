import * as passport from 'passport'

const passport = require('passport');
const express = require('express');
const router = express.Router();

// Ruta para el inicio de sesión
router.get('/login', (req, res) => {
    res.render('login');
}
);

// Ruta para el registro
router.get('/register', (req, res) => {
    res.render('register');
}
);

router.post('/login', (req, res) => {
    if (req.body.email === 'XXXXXXXXXXXXXXX' && req.body.password === 'admin') {
        res.redirect('/products');
    }
    else {
        res.redirect('/login');
    }    
}
);

router.post('/register', (req, res) => {
    if (req.body.email === 'XXXXXXXXXXXXXXX' && req.body.password === 'admin') {
        res.redirect('/products');
    }
    else {
        res.redirect('/register');
    }
}
);

module.exports = router;

