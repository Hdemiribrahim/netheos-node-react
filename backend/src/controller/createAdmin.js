const query = require('../utils/config');
const bcrypt = require('bcrypt');

module.exports.createAdmin = async function (req, res) {
    const username = "admin"
    const password = "admin"
    const role = "ADMIN"
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            let dataValues = [username, hash, role];
            let sql = "INSERT INTO `user` (`username`, `password`, `role` ) VALUES (?)";
            query(sql, [dataValues]);
        });
    });
    return res.json({ "Response": "true" });
};