var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PlaceSchema = new Schema({

module.exports = mongoose.model('Place', PlaceSchema);