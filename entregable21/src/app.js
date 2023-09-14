const express = require('express');
const session = require('express-session');
const flash = require('express-flash');

const app = express();

// Configura express-session y express-flash
app.use(session({
    secret: 'tu_secreto',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
