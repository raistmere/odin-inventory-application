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
router.get("/category/:id/delete", categoryController.get_category_delete);

// GET category update page
router.get("/category/:id/update", categoryController.get_category_update);

/* GET category detail page. */
router.get('/category/:id', categoryController.get_category_detail);

// POST new category
router.post("/category/create", categoryController.post_category_create);

// POST delete specific category
router.post("/category/:id/delete", categoryController.post_category_delete);

// POST update specific category
router.post("/category/:id/update", categoryController.post_category_update);




/* GET item list page. */
router.get('/item', itemController.get_item_list);

// GET item create page 
router.get("/item/create", itemController.get_item_create);

// GET item delete page
router.get("/item/:id/delete", itemController.get_item_delete);

// GET item update page
router.get("/item/:id/update", itemController.get_item_update);

/* GET item detail page */
router.get('/item/:id', itemController.get_item_detail);

// POST new item
router.post("/item/create", itemController.post_item_create);

// POST delete specific item
router.post("/item/:id/delete", itemController.post_item_delete);

// POST update specific item
router.post("/item/:id/update", itemController.post_item_update);

module.exports = router;