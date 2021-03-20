let express = require('express');
let router = express.Router();
let Scores = require('../classes/Scores');
let RequestAuthValidator = require('../classes/RequestAuthValidator');

router.get('/', function (req, res, next) {
    const isAdmin = req.query.auth && req.query.auth === 'chrystian';
    const responseType = req.get('accept').toLowerCase();
    if (responseType === 'application/json') {
        res.send(Scores.instance.formatted);

    } else {
        res.render('scores', {
            data: Scores.instance.data,
            admin: isAdmin
        });
    }
});

router.post('/', function (req, res, next) {
    const validator = new RequestAuthValidator(req);
    if (validator.validate() === false) {
        res.status(403);
        res.send({
            error: 'auth',
            message: 'Unauthorized request'
        });

    } else if (!req.body.name || !req.body.score === undefined) {
        res.status(422);
        res.send({
            error: 'bad data',
            message: 'Incomplete set of data received'
        });

    } else if (!req.body.score) {
        res.status(422);
        res.send({
            error: 'bad data',
            message: 'Try again with better score ;)'
        });

    } else {
        Scores.instance.add({
            name: req.body.name,
            score: req.body.score,
            key: validator.getToken()
        });
        res.send(Scores.instance.formatted);
    }
});

module.exports = router;
