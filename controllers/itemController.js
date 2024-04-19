const Item = require("../models/item.js");
const Category = require("../models/category.js");

// Display the inventory category list
exports.get_item_list = async (req, res, next) => {
    const allItems = await Item.find({});

    res.render('item_list', { 
        title: 'Item List',
        itemList: allItems,
    });
}

// Display inventory item detail page
exports.get_item_detail = async (req, res, next) => {
    const itemDetail = await Item.findById(req.params.id).populate("category", "id name").exec();
    console.log(itemDetail.category);

    res.render("item_detail", {
        itemDetail: itemDetail,
        // category: category
    });
}