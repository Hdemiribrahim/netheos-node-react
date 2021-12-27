const query = require("../utils/config");
const tagList = require("../utils/constants");

module.exports.deleteData = async function (req, res) {
  var id = req.body.id;
  //Delete data
  try {
    // Check data
    const checkDataSql = "SELECT id FROM `faq` WHERE  id = (?)";
    checkData = await query(checkDataSql, id);
    if (!(checkData.length > 0))
      return res.json({
        success: false,
        info: "Ooops. Données non trouvées ...",
      });

    // Delete data
    var sql = "DELETE FROM `faq` WHERE  id = (?)";
    await query(sql, id);
    
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

  return res.json({
    data: returnData,
    success: true,
    info: "Question supprimée avec succès",
  });
};
