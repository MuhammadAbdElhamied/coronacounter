var express = require('express');
var router = express.Router();

var __apiUrl = 'https://covid19.mathdro.id/api';
const fetch = require('node-fetch');
const NovelCovid = require('novelcovid');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index',
   { 
     title: 'Coronacounter',
     __deaths: deaths,
     __confirmed: confirmed,
     __recovered: recovered,
     //country: req.body.countries
    });

});



var deaths = fetch(__apiUrl).then(rees => rees.json()).then(json => deaths = (json.deaths.value));
var confirmed = fetch(__apiUrl).then(rees => rees.json()).then(json => confirmed = (json.confirmed.value))
var recovered = fetch(__apiUrl).then(rees => rees.json()).then(json => recovered = (json.recovered.value))

module.exports = router;
