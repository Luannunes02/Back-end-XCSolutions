const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
    async insert(req, res) {
        const persons = await Person.create(req.body);
        return res.json(persons)
    },
    async index (req, res) {
        const persons = await Person.find(req.params.id);
        return res.json(persons);
    },
    async detail (req, res) {
        const person = await Person.findById(req.params.id);
        return res.json(person);
    },
    async update (req, res) {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(person);
    },
    async delete (req, res) {
        const person = await Person.findByIdAndDelete(req.params.id);
        return res.send()
    }
}