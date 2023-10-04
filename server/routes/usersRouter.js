const express = require('express');
const router = express.Router();

const {
  createAccountSchema
} = require('../middleware/validators')

const {
  getUsers,
  validateUser,
  addUser,
  sendPassword,
  reset
} = require('../controllers/usersControllers')



// 

router.get("/:email/forgot-password", sendPassword)

router.get('/', getUsers);

router.post('/validate', validateUser);

router.post('/', createAccountSchema, addUser);

router.put('/reset-password', reset);



module.exports = router;

