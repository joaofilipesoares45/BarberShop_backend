const database = require('../connection/database')

module.exports = {
    async index(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");

        res.send(await database.selectTable('empresa'))
    },
}