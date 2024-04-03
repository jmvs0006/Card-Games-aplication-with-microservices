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

router.get("/es", async (req, res) => {
    try {
        await funciones.es(req, res)
    } catch (error) {
        console.log(error);
    }
});

router.get("/aleatorio/es", async (req, res) => {
    try {
        await funciones.esAleatorio(req, res)
    } catch (error) {
        console.log(error);
    }
});

router.get("/es/corta", async (req, res) => {
    try {
        await funciones.esCorta(req, res)
    } catch (error) {
        console.log(error);
    }
});

router.get("/aleatorio/es/corta", async (req, res) => {
    try {
        await funciones.esCortaAleatorio(req, res)
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;