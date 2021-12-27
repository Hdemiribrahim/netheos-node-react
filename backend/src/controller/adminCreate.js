const query = require("../utils/config");
const bcrypt = require("bcrypt");

/*  
    Cette partie a été ajoutée pour montrer 
    le cryptage de la structure de chiffrement.
    Il peut être développé plus tard. 
*/
module.exports.createAdmin = async function (req, res) {
  const values = req.body;
  const username = values.username;
  const password = values.password;
  const role = "ADMIN";
  const saltRounds = 10;

  // Check user
  try {
    const sql =
      "SELECT password FROM `user` WHERE  username = (?) AND role = (?)";
    const password = await query(sql, [values.username, "ADMIN"]);
    if (password.length > 0)
      return res.json({
        success: false,
        info: "Ce nom d'utilisateur existe déjà, essayez un autre nom d'utilisateur.",
      });
  } catch (error) {
    return res.json({ success: false, info: "Oppps. SQL Erreur..." });
  }

  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      let dataValues = [username, hash, role];
      let sql =
        "INSERT INTO `user` (`username`, `password`, `role` ) VALUES (?)";
      query(sql, [dataValues]);
    });
  });

  return res.json({ Response: "true", info: "Nouvel utilisateur ajouté..." });
};
