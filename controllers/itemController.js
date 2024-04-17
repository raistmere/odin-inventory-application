var itemList = [
    {
        name: "Item 1"
    },
    {
        name: "Item 2"
    },
    {
        name: "Item 3"
    }
];

// Display the inventory category list
exports.item_list = (req, res, next) => {
    res.render('category_list', { 
        title: '"NOT IMPLEMENTED: Item List"',
        categoryList: itemList,
    });
}