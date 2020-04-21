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
     mainJS: 'main.js',
     __deaths: deaths + ' ≈ ' + Math.round(((deaths / confirmed)*100)) + '%',
     __confirmed: confirmed,
     __recovered: recovered + ' ≈ ' + Math.round(((recovered / confirmed)*100)) + '%',

      __DPRSNT: 'The percentage of total cases: ' + ((deaths / confirmed)*100) + ' %',
      __RPRSNT: 'The percentage of total cases: ' + ((recovered / confirmed)*100) + ' %',
     __confiremed_persent: 'Assuming that the number of infected cases is: ' + '100 %',
     //country: req.body.countries
    });
});



var deaths = fetch(__apiUrl).then(rees => rees.json()).then(json => deaths = (json.deaths.value));
var confirmed = fetch(__apiUrl).then(rees => rees.json()).then(json => confirmed = (json.confirmed.value))
var recovered = fetch(__apiUrl).then(rees => rees.json()).then(json => recovered = (json.recovered.value))


module.exports = router;
