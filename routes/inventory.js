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

// GET category create page
router.get('/category/create', categoryController.get_category_create);

// GET category delete page
router.get("/category/:id/delete", categoryController.get_category_delete)

/* GET category detail page. */
router.get('/category/:id', categoryController.get_category_detail);

// POST new category
router.post("/category/create", categoryController.post_category_create);

// POST delete specific category
router.post("/category/:id/delete", categoryController.post_category_delete)



/* GET item list page. */
router.get('/item', itemController.get_item_list);

// GET item create page 
router.get("/item/create", itemController.get_item_create);

// POST new item
router.post("/item/create", itemController.post_item_create);

/* GET home page. */
router.get('/item/:id', itemController.get_item_detail);

module.exports = router;