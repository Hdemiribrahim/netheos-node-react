const query = require('../utils/config');

module.exports.deleteData = async function (req, res) {
    var id = req.body.id;
    var sql = "DELETE FROM `prestations` WHERE  id = (?)";

    await query(sql, id)
    const rows = await query('SELECT * FROM prestations');

    return res.json(rows);
};