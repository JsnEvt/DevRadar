//arquivo auxiliar para tratar a localizacao dos usuarios/devs

const mongoose = require('mongoose')
const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true
  }
})

module.exports = PointSchema;