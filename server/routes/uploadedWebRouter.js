const express = require('express');
const router = express.Router();

const {
    getWebDesign
  } = require('../controllers/uploadedWebController')


  
router.get('/:siteId', getWebDesign);

module.exports = router;