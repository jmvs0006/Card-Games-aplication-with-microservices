const express = require("express");
const router = express.Router();
const {funciones} = require ("./funciones");

router.get("/", async (req, res) => {
    try {
        await funciones.inicializar(req, res)
    } catch (error) {
        console.log(error);
    }
});

router.post("/robar", async (req, res) => {
    try {
        await funciones.robar(req, res)
    } catch (error) {
        console.log(error);
    }
});

router.post("/pasar", async (req, res) => {
    try {
        await funciones.pasar(req, res)
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;