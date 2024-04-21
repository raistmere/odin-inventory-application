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

// GET specific category detail based on id
exports.get_category_detail = async(req, res, next) => {
    const category = await Category.findById(req.params.id);
    const categoryItemList = await Item.find({category: category.id});

    res.render("category_detail", 
    { 
        categoryDetail: category,
        categoryItemList: categoryItemList
    });
};

// GET category create form
exports.get_category_create = async (req, res, next) => {
    res.render("category_create", {});
};

// GET specific category delete page
exports.get_category_delete = async (req,res,next) => {
    // 
    const category = await Category.findById(req.params.id);
    const allItemsInCategory = await Item.find({category: category._id});

    // 
    res.render("category_delete", {
        category: category,
        itemList: allItemsInCategory
    })
};

// GET category update page
exports.get_category_update = async (req, res, next) => {
    //
    const category = await Category.findById(req.params.id);

    // 
    res.render("category_update", {
        category: category
    });
};


// POST new category based on category create form data
exports.post_category_create = async(req, res, next) => {
    // Need to add some type of validation & sanitization here

    // Go ahead and make a new category using the form data we got.
    const newCategory = new Category({ name: req.body.categoryName, desc: req.body.categoryDesc })
    // Save the category to the DB
    newCategory.save();
    
    // Redirect to the category list so we can see our new category
    res.redirect("/inventory/category");
};

// POST delete specific category
exports.post_category_delete = async (req, res, next) => {
    // 
    await Category.findByIdAndDelete(req.body.categoryID);

    // 
    res.redirect("/inventory/category")
};

// POST update specific category
exports.post_category_update = async (req, res, next) => {
    // We have to do some validation & sanitization here

    // After we make sure everything is good, we want to go ahead and apply that update to the DB
    await Category.findByIdAndUpdate(req.body.categoryID, {
        name: req.body.categoryName,
        desc: req.body.categoryDesc
    });

    // Then we redirect to the category and it should reflect the changes.
    res.redirect(`/inventory/category/${req.body.categoryID}`);
};
