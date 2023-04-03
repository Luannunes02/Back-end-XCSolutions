const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const autoIncrement = require('mongoose-auto-increment');

const personSchema = new mongoose.Schema({
    CPForCNPJ: {
        type: String,
        unique: true,
        required: true,
        minlength: 11,
        maxlength: 14
    },
    fantasyName: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    businessName: {
        type: String,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    adress: {
        type: String,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    city: {
        type: String,
        uppercase: true,
        minlength: 3,
        maxlength: 100,
        required: true,
    },
    contact: {
        type: String,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    telephone: {
        type: String,
        minlength: 11,
        maxlength: 11
    },
    email: {
        type: String,
        minlength: 3,
        maxlength: 100
    },
    neighborhood: {
        type: String,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    uf: {
        type: String,
        uppercase: true,
        minlength: 2,
        maxlength: 2
    },
    cep: {
        type: String,
        minlength: 8,
        maxlength: 8,
        required: true,
    }
});

personSchema.plugin(mongoosePaginate);
mongoose.model('Person', personSchema);