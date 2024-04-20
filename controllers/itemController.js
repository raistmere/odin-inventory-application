const Item = require("../models/item.js");
const Category = require("../models/category.js");

// GET the inventory category list
exports.get_item_list = async (req, res, next) => {
    const allItems = await Item.find({});

    res.render('item_list', { 
        title: 'Item List',
        itemList: allItems,
    });
}

// GET inventory item detail page
exports.get_item_detail = async (req, res, next) => {
    const itemDetail = await Item.findById(req.params.id).populate("category", "id name").exec();

    res.render("item_detail", {
        itemDetail: itemDetail,
    });
}

// GET inventory item create item page form
exports.get_item_create = async (req, res, next) => {
    const allCategories = await Category.find({});

    res.render("item_create", {
        categoryList: allCategories
    });
}

// POST new inventory item to inventory list in DB
exports.post_item_create = async(req, res, next) => {
    // We need to do some validation and sanitization HERE

    // Create a new item using item model
    const newItem = new Item({
        name: req.body.itemName,
        desc: req.body.itemDesc,
        category: req.body.itemCategory,
        numOfStock: req.body.itemStock,
        price: req.body.itemPrice
    });
    // Go ahead and save that new item to the DB
    newItem.save();

    // Redirect user to the all item list so they can see their item on the list.
    res.redirect("/inventory/item");
};