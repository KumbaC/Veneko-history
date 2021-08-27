const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{

res.render('index', {title: "Veneko History"});

});

router.get('/contact', (req, res)=>{

res.render('contact', {title: "Veneko History"});

});


router.get('/about', (req, res)=>{

res.render('about', {title: "Veneko History"});

});
module.exports = router;