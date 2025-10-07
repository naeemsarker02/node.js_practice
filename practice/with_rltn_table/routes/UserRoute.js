const express = require('express');
const router = express.Router();
const upload = require('../config/UserMulter');
const {
    index,
    store,
    getById,
    updateById,
    deleteById,
} = require('../controllers/UserController');

// Better RESTful naming & structure
router.get('/', index);
router.post('/', upload.single('img'), store);
router.get('/:id', getById);
router.put('/:id', upload.single('img'), updateById);
router.delete('/:id', deleteById);

module.exports = router;
