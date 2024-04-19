const Item = require("../models/item.js");

// Display the inventory category list
exports.item_list = async (req, res, next) => {
    const allItems = await Item.find({});

    res.render('item_list', { 
        title: 'Item List',
        itemList: allItems,
    });
}