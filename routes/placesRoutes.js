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

    router.get('/tag/:tag', async function(req, res, next) {
        try {
          const tag = req.params.tag;
          const result = await Place.getAllByTag(tag);
          res.status(result.status).json(result.result);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });

    module.exports = router;