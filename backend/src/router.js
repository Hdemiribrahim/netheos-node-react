const express = require('express');
const router = express.Router();
const loginAdmin = require('./controller/loginAdmin')
const addData = require('./controller/addData')
const getFaqData = require('./controller/getFaqData')
const filter = require('./controller/filter')
const search = require('./controller/search')
const deleteData = require('./controller/deleteData')
const createAdmin = require('./controller/createAdmin')


router.post('/loginAdmin',loginAdmin.loginAdmin);
router.post('/addData',addData.addData);
router.get('/getFaqData',getFaqData.getFaqData);
router.post('/search',search.search);
router.post('/filterData',filter.filter);
router.post('/deleteData',deleteData.deleteData);

// It is created for << create admin >>.
/* router.get('/createAdmin',createAdmin.createAdmin); */

module.exports = router;