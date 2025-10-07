const express = require('express');
const app = express.Router();
const upload = require('../config/product-multer');
const {index,store, getById,updateById,deleteById} = require('./../controllers/product-controller');



app.get('/', index);
app.post('/store',upload.single('img') ,store);
app.get('/:id', getById);
app.post('/update/:id',upload.single('img'),updateById);
app.delete('/delete/:id', deleteById);


module.exports = app;

