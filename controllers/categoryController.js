const Category = require("../models/category.js");
const Item = require("../models/item.js");

// GETS the inventory category list
exports.get_category_list = async (req, res, next) => {
    const allCategories = await Category.find({});

    res.render('category_list', { 
        title: "Category List",
        categoryList: allCategories,
    });
}

// GETS specific category detail based on id
exports.get_category_detail = async(req, res, next) => {
    const category = await Category.findById(req.params.id);
    const categoryItemList = await Item.find({category: category.id});
    console.log(categoryItemList);

    res.render("category_detail", 
    { 
        categoryDetail: category,
        categoryItemList: categoryItemList
    });
};

// GETS category create form
exports.get_category_create = async (req, res, next) => {
    res.render("category_create", {});
};

// POST new category based on category create form data
exports.post_category_create = async(req, res, next) => {
    // res.render("category_create_post", {});
    res.redirect("/inventory/category");
};
