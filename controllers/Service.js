const database = require('../connection/database')
module.exports = {
    
    async store(req, res) {
        res.send(await database.addInTable('servicos', req.body))
    }, 

    async delete(req, res) {
        if (req.body.id !== undefined) {
            res.send(await database.removeOfTable('servicos', req.body.id))
        }
    }
}