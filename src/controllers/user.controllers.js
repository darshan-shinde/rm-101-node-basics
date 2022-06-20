const express = require("express");

const User = require("../models/user.models");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        
        const users = await User
        .find({})
        .lean()
        .exec()
        return res.status(200).send({user: users})

    } catch (error) {
        return res.status(500).send({error: error})
    }
});
router.get('/id:', async (req, res) => {
    try {
        
        const users = await User
        .findOne({})
        .lean()
        .exec()
        return res.status(200).send({user: users})

    } catch (error) {
        return res.status(500).send({error: error})
    }
});


router.post('/', async (req, res) => {
    try {
        
        const user = await User.create(req.body)
        
        return res.status(200).send({user: user})

    } catch (error) {
        return res.status(500).send({error: error})
    }

})


router.post

module.exports = router;


