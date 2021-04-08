const router = require('express').Router();
let DB = require('../models/db.model');

router.route('/').get((req,res)=>{
    DB.find()
    .then(db => res.json(fullname))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    const fullname = req.body.fullname;
    const email = req.body.email;

    const newData = new DB({fullname, email});

    newData.save()
    .then(db => res.json('New Record Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;