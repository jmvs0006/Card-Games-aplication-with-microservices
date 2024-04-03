const express = require("express");
const router = express.Router();
const {funciones} = require ("./funciones");

router.get("/fr", async (req, res) => {
    try {
        await funciones.fr(req, res)
    } catch (error) {
        console.log(error);
    }
});

router.get("/aleatorio/fr", async (req, res) => {
    try {
        await funciones.frAleatorio(req, res)
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;