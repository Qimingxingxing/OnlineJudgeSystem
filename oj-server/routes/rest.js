const express = require("express");
const router = express.Router();
const problemService = require('../services/problemService');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const nodeRestClient = require("node-rest-client").Client;
const restClient = new nodeRestClient();
const EXECUTOR_SERVER_URL = 'http://localhost:5000/build_and_run';

restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'POST');

router.get('/problems', (req, res) => {
    problemService.getProblems().then(problems => res.json(problems));
})

router.get('/problems/:id', (req, res) => {
    const id = req.params.id;
    problemService.getProblem(+id).then(problem => res.json(problem));
})

router.post("/problems", jsonParser, (req, res) => {
    problemService.addProblem(req.body)
        .then(function (problem) {
            res.json(problem);
        }, function (error) {
            res.status(400).send('Problem name already exists');
        });
});

// build and run
router.post('/build_and_run', jsonParser, function(req, res) {
    const userCodes = req.body.userCodes;
    const lang = req.body.lang;
    console.log(lang + ' ' + userCodes);
    // res.json({'text': 'hello from nodejs'});
    restClient.methods.build_and_run(
        {
            data: {
                code: userCodes,
                lang: lang
            },
            headers: {
                'Content-Type': 'application/json'
            }
        },
        (data, response) => {
            console.log('received response from executor server: ');
            // build: xx, run: xx
            const text = `Build output: ${data['build']}    Execute output: ${data['run']}`;
            console.log('text is...', text);
            data['text'] = text;
            res.json(data);
        }
    );
});
module.exports = router;