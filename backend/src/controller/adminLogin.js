const query = require("../utils/config");
const bcrypt = require("bcrypt");

module.exports.loginAdmin = async function (req, res, next) {
  const values = req.body;
  let response;
  let password;
  let resInfo = "Success..";
  let resToken = "";

  // Check user
  try {
    const sql =
      "SELECT password FROM `user` WHERE  username = (?) AND role = (?)";
    password = await query(sql, [values.username, "ADMIN"]);
    if (!(password.length > 0))
      return res.json({
        success: false,
        info: "Votre nom d'utilisateur est incorrect.",
      });
  } catch (error) {
    return res.json({ success: false, info: "Oppps. SQL Erreur..." });
  }

  //Compare password
  try {
    response = bcrypt.compareSync(values.password, password[0].password);
  } catch (error) {
    console.log(error);
    return res.json({ success: false, info: "Oppps. bcrypt Erreur..." });
  }

  // Create Token
  const rand = () => Math.random(0).toString(36).substr(2);
  const token = (length) =>
    (rand() + rand() + rand() + rand()).substr(0, length);

  // Check password response (bcrypt)
  if (!response) {
    resInfo = "Votre mot de passe est incorrect.";
  } else {
    resToken = token(24);
  }
  
  return res.json({ success: response, token: resToken, info: resInfo });
};
