const mongoose = require("mongoose");

const pharmacySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
});

module.exports = Pharmacy = mongoose.model("Pharmacy", pharmacySchema);
