const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const problemservice = require("../services/ProblemService");
const EXECUTOR_SERVER_URL = 'http://localhost:5000/build_and_run';

const Client = require('node-rest-client').Client;
const client = new Client();

router.get("/problems", (req, res) => {
    problemservice.getProblems().then(problems => res.json(problems));
});

router.get("/problems/:id", (req, res) => {
    problemservice.getProblem(+req.params.id).then(problem => res.json(problem));    
});

router.post("/problems", jsonParser, (req, res) => {
    problemservice.addProblem(req.body).then(problem => {
        res.json(problem);
    }, reject => {
        res.status(400).send("Problem name already exists");
    });
});

router.post("/buildAndRun", jsonParser, (req, res) => {
    const args = {
        data: req.body,
        headers: { "Content-Type": "application/json" }
    }
    client.post(EXECUTOR_SERVER_URL, args, (data, response) => {
        const text = `Build output: ${data['build']}    Execute output: ${data['run']}`;
        data.text = text;        
        res.json(data);
    });
});

module.exports = router;
