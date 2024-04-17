var express = require('express');
var router = express.Router();

var categoryController = require('../controllers/categoryController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inventory' });
});

/* GET home page. */
router.get('/category', categoryController.category_list);

// /* GET home page. */
// router.get('/category/:id', function(req, res, next) {
//     res.send(`Category ${req.params.id}`);
// });

/* GET home page. */
router.get('/item', function(req, res, next) {
    res.render('item_list', {title: 'Item List'})
});

// /* GET home page. */
// router.get('/item/:id', function(req, res, next) {
//     res.send("Hello World");
// });

module.exports = router;