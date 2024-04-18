const Category = require("../models/category.js");

// Display the inventory category list
exports.get_category_list = async (req, res, next) => {
    const allCategories = await Category.find({});
    console.log(allCategories);

    res.render('category_list', { 
        title: "Category List",
        categoryList: allCategories,
    });
}
