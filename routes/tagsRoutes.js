const express = require('express');
    const router = express.Router();
    const Place = require("../models/tagsModel");

    router.get('/', async function(req,res,next){
        try {
            console.log("Get all tags");
            let result = await Place.getAll();
            res.status(result.status).send(result.result);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    });

    module.exports = router;