
var categoryList = [
    {
        name: "category 1"
    },
    {
        name: "category 2"
    },
    {
        name: "category 3"
    }
];

// Display the inventory category list
exports.category_list = (req, res, next) => {
    res.render('category_list', { 
        title: '"NOT IMPLEMENTED: Category List"',
        categoryList: categoryList,
    });
}
