const express = require('express');
const app = express.Router();
const upload = require('../config/paymentTypes-multer');
const {index,store, getById,updateById,deleteById} = require('./../controllers/paymentTypes-controller');


app.get('/', index);
app.post('/store',upload.single('logo') ,store);
app.get('/:id', getById);
app.post('/update/:id',upload.single('logo'),updateById);
app.delete('/delete/:id', deleteById);


module.exports = app;

