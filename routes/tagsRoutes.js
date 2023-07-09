const express = require('express');
    const router = express.Router();
    const Tag = require('../models/tagsModel');

    router.get('/tags', async function(req,res,next){
        try {
            console.log("Get all tags");
            let result = await Tag.getAll();
            res.status(result.status).send(result.result);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    });

    module.exports = router;