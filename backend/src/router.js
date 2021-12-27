const express = require("express");
const router = express.Router();
const loginAdmin = require("./controller/adminLogin");
const addData = require("./controller/dataAdd");
const getFaqData = require("./controller/dataGetFaq");
const filter = require("./controller/dataFilter");
const search = require("./controller/dataSearch");
const deleteData = require("./controller/dataDelete");
const createAdmin = require("./controller/adminCreate");

router.post("/admin/create", createAdmin.createAdmin);
router.post("/admin/login", loginAdmin.loginAdmin);
router.get("/data/getFaq", getFaqData.getFaqData);
router.post("/data/add", addData.addData);
router.post("/data/delete", deleteData.deleteData);
router.post("/data/filter", filter.filter);

router.post("/data/search", search.search);

module.exports = router;
