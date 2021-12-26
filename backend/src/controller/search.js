const query = require("../utils/config");

module.exports.search = async function (req, res) {
    let searchText= req.body.searchText;
    console.log(searchText)
    let rows;
    try {
        let sqlSelect = "SELECT * FROM faq WHERE (question LIKE (?) OR answer LIKE (?))";
        rows = await query(sqlSelect, ["%"+searchText+"%","%"+searchText+"%"]);  
    } catch (error) {
        res.json({success:false,info:"Ooops. Sql Error ..."});
    }
    res.json({success:true,data:rows});
};
