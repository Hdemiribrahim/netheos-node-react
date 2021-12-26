const express = require('express');
const router = express.Router();
const createAdmin = require('./controller/createAdmin')
const loginAdmin = require('./controller/loginAdmin')
const addData = require('./controller/addData')
const getFaqData = require('./controller/getFaqData')

const deleteData = require('./controller/deleteData')
const filter = require('./controller/filter')

const search = require('./controller/search')

router.post('/loginAdmin',loginAdmin.loginAdmin);
router.post('/addData',addData.addData);
router.post('/search',search.search);
router.get('/getFaqData',getFaqData.getFaqData);
router.post('/filterData',filter.filter);

router.get('/createAdmin',createAdmin.createAdmin);
/* router.post('/delete',deleteData.deleteData);


 */
 

module.exports = router;