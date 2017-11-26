const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
const Problem = mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    difficulty: String
});
const ProblemModel = mongoose.model('ProblemModel', Problem);
ProblemModel.remove({}, res => {
    console.log(res);
})