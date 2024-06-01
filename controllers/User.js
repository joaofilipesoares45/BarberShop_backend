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
                req.body.id = ret[0][0]['LAST_INSERT_ID()']
                if (req.body.tipo === 'empresa') {
                    database.addInTable('empresa', req.body)
                } else {
                    database.addInTable('clientes', req.body)
                }
                res.send({message: ret[0][0]['LAST_INSERT_ID()']})
            })
    },
    
    async update(req, res) {
        const user = req.body
        await database.updateInTable('usuarios', user)
        if (user.tipo === 'cliente') {
            await database.updateInTable('clientes', user)
        }else{
            await database.updateInTable('empresa', user)
        }
    },

    async delete(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");

        if (req.body.id !== undefined) {
            const user = await database.selectWhere('usuarios', req.body.id).then(user => {return user[0]})
            
            if (user.tipo === 'empresa') {
                await database.removeOfTable('empresa', user.id)
            }else{
                await database.removeOfTable('clientes', user.id)
            }
            await database.removeOfTable('usuarios', user.id)
            res.send({'mensage': 'OK'})
        }
    }
}

