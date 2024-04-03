const express = require('express');
const rutas = require ("./rutas");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const puerto = 8003;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", rutas);
app.listen(puerto, ()=>{
    console.log(`Microservicio Siete y medio en puerto ${puerto}`);
});

module.exports = app;