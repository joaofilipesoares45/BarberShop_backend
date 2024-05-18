const database = require('../connection/database.js')
module.exports = {

    async index(req, res) {
        res.send(await database.selectTable('itens'))
    },

    async store(req, res) {
        await database.addInTable('itens', req.body)
        res.send({ 'mensage': 'OK' })
    },

    async update() {

    },

    async delete() {
        if (req.body.id !== undefined) {
            await database.addInTable('itens', req.body.id)
            res.send({ 'mensage': 'OK' })
        }
    }

}