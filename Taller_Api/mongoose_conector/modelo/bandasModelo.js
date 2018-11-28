const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BandaSchema = new Schema({
    nombre: {
        type: String

    },

    edad: {
        type: Number
    },

    instituto:{
        type: String
    },
    cargo:{
        type: String
    },
    nota:{
        type: Number
    }
})

const Banda = mongoose.model('banda', BandaSchema)

module.exports = Banda
