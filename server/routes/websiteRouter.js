const express = require('express');
const router = express.Router();
const app = express();
const {upload} =require('../middleware/multer')

const {
  createWebsite,
  storeData,
  storeImage,
  showImage,
  updateData,
  getWebsites
} = require('../controllers/websiteControllers')





router.post('/:id/create', createWebsite);


router.post('/:site_id/store-data', storeData);

router.post('/:site_id/store-image', upload.array('imgCollection', 6), storeImage);

router.get('/:site_id/show-image/:image_id', showImage);

router.get('/:user_id/websites', getWebsites);

router.put('/:site_id', updateData);



module.exports = router;