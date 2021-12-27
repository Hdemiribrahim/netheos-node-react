const query = require("../utils/config");
const tagList = require("../utils/constants")

module.exports.getFaqData = async function (req, res) {
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
    res.json({ success: false, info: "Ooops. Sql Error ..." });
  }

  return res.json({ success: true, data: returnData });
};
