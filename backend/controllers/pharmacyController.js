const Pharmacy = require("../models/pharmacyModel");
const asyncHandler = require("express-async-handler");

const getPharmacies = asyncHandler(async (req, res) => {
  const pharmacies = await Pharmacy.find({});
  res.json(pharmacies);
});

module.exports = {
  getPharmacies,
};
