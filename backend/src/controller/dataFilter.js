const query = require("../utils/config");

module.exports.filter = async function (req, res) {
  let tag = req.body.tag;
  let rows;
  // Index 
  try {
    if (tag == "all") {
      let sql = "SELECT * FROM faq";
      rows = await query(sql);
    } else {
      let sql = "SELECT * FROM faq USE INDEX (tag) WHERE tag= (?)";
      rows = await query(sql, tag);
    }
  } catch (error) {
    res.json({ success: false, info: "Ooops. Sql Error ..." });
  }

  return res.json({ success: true, data: rows });
};
