const express = require('express');
const app = express.Router();
const {index,store, getById,updateById,deleteById} = require('./../controllers/sellitem-controller');
const multer = require('multer');
const upload = multer();

app.get('/', index);
app.post('/store',upload.none() ,store);
app.get('/:id', getById);
app.post('/update/:id',upload.none(),updateById);
app.delete('/delete/:id', deleteById);


module.exports = app;

