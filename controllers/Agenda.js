const database = require('../connection/database.js')
module.exports = {

    async index(req, res) {
        res.send(await database.selectTable('agenda'))
    },

    async store(req, res) {
        await database.addInTable('agenda', req.body)
        res.send({ 'mensage': 'OK' })
    },

    async update() {

    },

    async delete() {
        if (req.body.id !== undefined) {
            await database.addInTable('agenda', req.body.id)
            res.send({ 'mensage': 'OK' })
        }
    }

}
