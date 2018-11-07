var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

Model = new Schema({
    command:    String,
    action:     String,
    visibility: Number
});

module.exports = mongoose.model('Commands', Model);