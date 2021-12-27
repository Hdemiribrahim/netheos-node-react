const query = require("../utils/config");
const tagList = require("../utils/constants")

module.exports.addData = async function (req, res) {
  let values = req.body;
  let dataValues = [values.question, values.answer, values.tag];

  // Add new data
  try {
    let sql = "INSERT INTO `faq` (`question`, `answer`, `tag`) VALUES (?)";
    await query(sql, [dataValues]);
  } catch (error) {
    return res.json({
      data: {},
      success: false,
      info: "Ooops. Sql Erreur ...",
    });
  }

  // Return all data for update context
  let returnData = {};
  try {
    for (const tag of tagList) {
      let sqlSelect = "SELECT * FROM faq USE INDEX (tag) WHERE tag = (?)";
      let rows = await query(sqlSelect, tag);
      if (rows.length > 0) {
        returnData[tag] = { rows };
      }
    }
  } catch (error) {
    return res.json({
      data: {},
      success: false,
      info: "Ooops. Sql Erreur ...",
    });
  }
  
  return res.json({ data: returnData, success: true, info: "Question ajoutée avec succès." });
};
