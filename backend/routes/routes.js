const route = require('express').Router();
const controller = require('../controller/controller');
const upload = require('../middleware/multer');

// create new Nersery - also upload image
route.post('/newNersery',upload.array('image',6),controller.newNersery);

// get Nursery
route.get('/nursery',controller.getNursery);


module.exports = route;
