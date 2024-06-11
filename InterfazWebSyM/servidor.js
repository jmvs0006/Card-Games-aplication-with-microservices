const express = require('express');
const rutas = require ("./rutas");
const app = express();
const puerto = 8004;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", rutas);
app.listen(puerto, ()=>{
    console.log(`Cliente para la interfaz del Siete y medio en puerto ${puerto}`);
});

module.exports = app;