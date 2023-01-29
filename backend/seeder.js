// This file is for importing data/deleting all data
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/users");
const products = require("./data/products");
const prescriptions = require("./data/prescription");
const pharmacies = require("./data/pharmacy");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const Post = require("./models/postModel");
const Prescription = require("./models/prescriptionModel");
const Pharmacy = require("./models/pharmacyModel");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Post.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Prescription.deleteMany();
    await Pharmacy.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser };
    });
    const samplePrescriptions = prescriptions.map(prescription => {
      return { ...prescription, user: createdUsers[1]._id };
    });
    const samplePharmacies = pharmacies.map(pharmacy => {
      return { ...pharmacy };
    });

    await Prescription.insertMany(samplePrescriptions);
    await Product.insertMany(sampleProducts);
    await Pharmacy.insertMany(samplePharmacies);
    console.log(".....Data Imported.....");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Post.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log(".....Data Destroyed.....");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") destroyData();
else importData();
