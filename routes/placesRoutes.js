const express = require('express');
    const router = express.Router();
    const Place = require("../models/placesModel");

    router.get('/', async function(req,res,next){
        try {
            console.log("Get all places");
            let result = await Place.getAll();
            res.status(result.status).send(result.result);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    });

    module.exports = router;