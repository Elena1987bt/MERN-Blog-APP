const express = require('express');
const router = express.Router();
const {
  getAllLists,
  createList,
  deleteList,
} = require('../controllers/listController');

const auth = require('../middleware/auth');

router.get('/', auth, getAllLists);
router.post('/', auth, createList);
router.delete('/:id', auth, deleteList);

module.exports = router;
