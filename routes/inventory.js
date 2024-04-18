var express = require('express');
var router = express.Router();

var categoryController = require('../controllers/categoryController')
var itemController = require('../controllers/itemController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inventory' });
});

/* GET category list page. */
router.get('/category', categoryController.get_category_list);

/* GET home page. */
router.get('/category/:id', categoryController.get_category_detail);

/* GET item list page. */
router.get('/item', itemController.item_list);

// /* GET home page. */
// router.get('/item/:id', function(req, res, next) {
//     res.send("Hello World");
// });

module.exports = router;