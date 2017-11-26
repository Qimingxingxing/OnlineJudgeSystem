const mongoose = require('mongoose');
const Problem = mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    difficulty: String
});
const ProblemModel = mongoose.model('ProblemModel', Problem);
module.exports = ProblemModel;