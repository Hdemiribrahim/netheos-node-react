const query = require('../utils/config');
const bcrypt = require('bcrypt');

module.exports.loginAdmin = async function (req, res, next) {
    const values = req.body;
    const rand = () => Math.random(0).toString(36).substr(2);
    const token = (length) => (rand() + rand() + rand() + rand()).substr(0, length);
    let response;
    let resInfo = "Success..";

    // Check user
    const sql = "SELECT password FROM `user` WHERE  username = (?) AND role = (?)";
    const password = await query(sql, [values.username, "ADMIN"]);
    if (!(password.length > 0)) return res.json({ success: false, info: "Votre nom d'utilisateur est incorrect." });
    //Compare password
    try {
        response = bcrypt.compareSync(values.password, password[0].password)
    } catch (error) {
        return res.json({ success: false, info: "Oppps. bcrypt error..." });
    }
    if(!response) resInfo = "Votre mot de passe est incorrect.";
    return res.json({ success: response, token: token(24), info: resInfo });
};


