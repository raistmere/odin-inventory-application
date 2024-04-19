const mongoose = require("mongoose");

const Schema  = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    desc: String,
    category: { type: Schema.Types.ObjectId, ref: "categories"} ,   // There is only one category for each item.
    price: Number,
    numOfStock: Number
});

// Gets the correct URL address of the current category.
// We don't use arrow because we need to know about "this"
ItemSchema.virtual("URL").get(function() {
    return `/inventory/item/${this.id}`;
})

module.exports = mongoose.model("Item", ItemSchema);
