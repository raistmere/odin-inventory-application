const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const category = new Schema({
    name: String,
    desc: String,
});

// Gets the correct URL address of the current category.
// We don't use arrow because we need to know about "this"
category.virtual("URL").get(function() {
    return `/inventory/category/${this.id}`;
})


module.exports = mongoose.model("Category", category);