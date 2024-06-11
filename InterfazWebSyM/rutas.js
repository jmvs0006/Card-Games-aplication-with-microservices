const express = require("express");
const router = express.Router();
const {funciones} = require ("./funciones");

router.use("/", express.static(__dirname +'/static'));

router.get("/", async(req,res)=>{
    try{
        await funciones.principal(req.res);
    }catch (error) {
        console.log(error);
    }
});

module.exports = router;