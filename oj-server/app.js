const express = require('express');
const app = express();
const restRouter = require("./routes/rest");
const indexRouter = require('./routes/index');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
// mongodb://<dbuser>:<dbpassword>@ds051645.mlab.com:51645/qiming

const path = require('path');
app.use(express.static(path.join(__dirname, '../public/')));

app.use("/api/v1", restRouter);
app.use("/", indexRouter);

app.listen(3000, function () {
});