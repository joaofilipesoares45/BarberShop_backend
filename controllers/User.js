const database = require('../connection/database')

module.exports = {
    async index(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");

        res.send(await database.selectTable('usuarios'))
    },

    async store(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");


        await database.addInTable('usuarios', req.body)
            .then(ret => {
                if (req.body.tipo === 'empresa') {
                    req.body.id = ret[0][0]['LAST_INSERT_ID()']
                    database.addInTable('empresa', req.body)
                } else {
                    req.body.idEmpresa = ret[0][0]['LAST_INSERT_ID()']
                    database.addInTable('clientes', req.body)
                }
            })
        res.send({'mensage': 'OK'})
    },

    async delete(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");

        if (req.body.id !== undefined) {
            await database.removeOfTable('usuarios', req.body.id)
            res.send({'mensage': 'OK'})
        }
    }
}
