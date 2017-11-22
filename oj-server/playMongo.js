const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
const PeopleSchema = mongoose.Schema({
    name: String,
    age: Number
});
const PeopleModel = mongoose.model('People', PeopleSchema);
var qiming = new PeopleModel({name: "qiming", age:23});
qiming.save();
PeopleModel.find((err, people) => {
    if (err) return console.error(err);
    console.log(people);
});