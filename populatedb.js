#! /usr/bin/env node

console.log(
  'This script populates some inventory categories, items to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);


// // Models
import CategoryModel from "./models/category.js";
import ItemModel from "./models/item.js";

// // Store created data in empty arrays
const categories = [];
const items = [];

// // Setup Mongoose and Database
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
// Database based off the userArgs passed through command line
const mongoDB = userArgs[0];

// Call main function and catch errors
main().catch((err) => console.log(err));

// Main function that will populate database with starter data
async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createItems();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function categoryCreate(index, name, desc) {
  const category = new CategoryModel({ name: name , desc: desc});
  await category.save();
  categories[index] = category;
  console.log(`Added category: ${name}`);
}

async function itemCreate(index, name, category, price, numOfStock) {
  const itemDetail = { 
    name: name, 
    desc: desc, 
    category: category,
    price: price,
    numOfStock: numOfStock 
  };

  const item = new ItemModel(itemDetail);

  await item.save();
  item[index] = item;
  console.log(`Added item: ${name} ${category.name}`);
}

async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, "Weapons", "This category contains all weapon types."),
    categoryCreate(1, "Armor", "This category contains all armor types."),
    categoryCreate(2, "Potion", "This category contains all potion types."),
  ]);
}

async function createItems() {
  console.log("Adding items");
  await Promise.all([
    itemCreate(0, "Wooden Sword", categories[0], 57, 15),
    itemCreate(1, "Iron Sword", categories[0], 103, 7),
    itemCreate(2, "Leather Helmet", categories[1], 82, 10),
    itemCreate(3, "Minor Health Potion", categories[2], 23, 21)
  ]);
}

  // async function bookCreate(index, title, summary, isbn, author, genre) {
  //   const bookdetail = {
  //     title: title,
  //     summary: summary,
  //     author: author,
  //     isbn: isbn,
  //   };
  //   if (genre != false) bookdetail.genre = genre;
  
  //   const book = new Book(bookdetail);
  //   await book.save();
  //   books[index] = book;
  //   console.log(`Added book: ${title}`);
  // }
  
  // async function bookInstanceCreate(index, book, imprint, due_back, status) {
  //   const bookinstancedetail = {
  //     book: book,
  //     imprint: imprint,
  //   };
  //   if (due_back != false) bookinstancedetail.due_back = due_back;
  //   if (status != false) bookinstancedetail.status = status;
  
  //   const bookinstance = new BookInstance(bookinstancedetail);
  //   await bookinstance.save();
  //   bookinstances[index] = bookinstance;
  //   console.log(`Added bookinstance: ${imprint}`);
  // }
  
  
  // async function createBooks() {
  //   console.log("Adding Books");
  //   await Promise.all([
  //     bookCreate(0,
  //       "The Name of the Wind (The Kingkiller Chronicle, #1)",
  //       "I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.",
  //       "9781473211896",
  //       authors[0],
  //       [genres[0]]
  //     ),
  //     bookCreate(1,
  //       "The Wise Man's Fear (The Kingkiller Chronicle, #2)",
  //       "Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.",
  //       "9788401352836",
  //       authors[0],
  //       [genres[0]]
  //     ),
  //     bookCreate(2,
  //       "The Slow Regard of Silent Things (Kingkiller Chronicle)",
  //       "Deep below the University, there is a dark place. Few people know of it: a broken web of ancient passageways and abandoned rooms. A young woman lives there, tucked among the sprawling tunnels of the Underthing, snug in the heart of this forgotten place.",
  //       "9780756411336",
  //       authors[0],
  //       [genres[0]]
  //     ),
  //     bookCreate(3,
  //       "Apes and Angels",
  //       "Humankind headed out to the stars not for conquest, nor exploration, nor even for curiosity. Humans went to the stars in a desperate crusade to save intelligent life wherever they found it. A wave of death is spreading through the Milky Way galaxy, an expanding sphere of lethal gamma ...",
  //       "9780765379528",
  //       authors[1],
  //       [genres[1]]
  //     ),
  //     bookCreate(4,
  //       "Death Wave",
  //       "In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...",
  //       "9780765379504",
  //       authors[1],
  //       [genres[1]]
  //     ),
  //     bookCreate(5,
  //       "Test Book 1",
  //       "Summary of test book 1",
  //       "ISBN111111",
  //       authors[4],
  //       [genres[0], genres[1]]
  //     ),
  //     bookCreate(6,
  //       "Test Book 2",
  //       "Summary of test book 2",
  //       "ISBN222222",
  //       authors[4],
  //       false
  //     ),
  //   ]);
  // }
  
  // async function createBookInstances() {
  //   console.log("Adding authors");
  //   await Promise.all([
  //     bookInstanceCreate(0, books[0], "London Gollancz, 2014.", false, "Available"),
  //     bookInstanceCreate(1, books[1], " Gollancz, 2011.", false, "Loaned"),
  //     bookInstanceCreate(2, books[2], " Gollancz, 2015.", false, false),
  //     bookInstanceCreate(3,
  //       books[3],+
  //       "New York Tom Doherty Associates, 2016.",
  //       false,
  //       "Available"
  //     ),
  //     bookInstanceCreate(4,
  //       books[3],
  //       "New York Tom Doherty Associates, 2016.",
  //       false,
  //       "Available"
  //     ),
  //     bookInstanceCreate(5,
  //       books[3],
  //       "New York Tom Doherty Associates, 2016.",
  //       false,
  //       "Available"
  //     ),
  //     bookInstanceCreate(6,
  //       books[4],
  //       "New York, NY Tom Doherty Associates, LLC, 2015.",
  //       false,
  //       "Available"
  //     ),
  //     bookInstanceCreate(7,
  //       books[4],
  //       "New York, NY Tom Doherty Associates, LLC, 2015.",
  //       false,
  //       "Maintenance"
  //     ),
  //     bookInstanceCreate(8,
  //       books[4],
  //       "New York, NY Tom Doherty Associates, LLC, 2015.",
  //       false,
  //       "Loaned"
  //     ),
  //     bookInstanceCreate(9, books[0], "Imprint XXX2", false, false),
  //     bookInstanceCreate(10, books[1], "Imprint XXX3", false, false),
  //   ]);
  // }