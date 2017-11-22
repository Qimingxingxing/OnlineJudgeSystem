const ProblemModel = require("../models/problemModel");

const getProblems = () => {
    return new Promise((resolve, reject) => {
        ProblemModel.find((err, res) => {
            if (err){
                reject();
            } else {
                resolve(res);
            }
        });
    });
}

const getProblem = (id) => {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({id: id}, (err, res) => {
            if (err){
                reject();
            } else {
                resolve(res);
            }
        });
    });
}

const addProblem = (newProblem) => {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({name: newProblem.name}, (err, res) => {
            if(res){
                reject();
            } else{
                ProblemModel.count((err, num) => {
                    newProblem.id = num + 1;
                    let mongoProblem = new ProblemModel(newProblem);
                    mongoProblem.save();
                    resolve(newProblem);
                });
            }
        });
    });
}


module.exports = {
    getProblems,
    getProblem,
    addProblem
}