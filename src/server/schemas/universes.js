'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Universe = new Schema({
  name: String,
});

module.exports = mongoose.model('Universe', Universe);
