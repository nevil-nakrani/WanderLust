const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/list.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb+srv://nakrani_nevil:vW6ywtiZv5Kll4Lj@cluster0.q4mjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66c733c6725961ad257b86fd",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};
initDB();
