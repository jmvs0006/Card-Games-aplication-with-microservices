const express = require ("express");
const rutas = require ("./rutas");
const bodyParser = require("body-parser")
const cors = require('cors');
const app = express();
const puerto = 8001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use("/", rutas);

app.listen(puerto, ()=>{
    console.log(`Microservicio barajas en puerto ${puerto}`);
})

module.exports = app;