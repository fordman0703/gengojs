var express = require('express');
var router = express.Router();
var gengo = require('gengojs');

;
/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Gengo.js',
        language: gengo.getLanguage()
    });
});

module.exports = router;
