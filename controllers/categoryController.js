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

// Displays specific category detail based on id
exports.get_category_detail = async(req, res, next) => {
    const category = await Category.findById(req.params.id);

    res.render("category_detail", { categoryDetail: category});
}
