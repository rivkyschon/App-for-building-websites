let uuidv4 = require('uuid/v4');
const multer = require('multer')


const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(DIR);
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    let fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName);

  }
});

var upload = multer({ storage: storage });


module.exports = {upload}