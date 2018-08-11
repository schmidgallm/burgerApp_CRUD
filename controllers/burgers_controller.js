// Dependencies
const express = require('express');
const router = express.Router();

// Import burger object from modles folder so route can use queried data
const burger = require('../models/burger.js');

// Init all Routes
router.get('/', function(req, res){
    burger.all(function(data){
        let burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render('index', burgerObj);
    });
});

router.get('/api/burgers', function(req, res){
    burger.all(function(data){
        return res.json(data);
    });
});

router.post('/api/burgers', function(req, res){
    burger.create(req.body.burger_name, function(result){
        res.json(result);
    });
});

router.put('/api/burgers/:id', function(req, res){
    let id = 'id=' + req.body.id;
    burger.update(id, function(result){
        res.json(result);
    });
});

router.delete('/api/burgers/:id', function(req, res){
    let id = req.body.id;
    burger.remove(id, function(result){
        res.json(result);
    });
});




// Export Router function so server can use
module.exports = router;
