const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  issueDate: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientAddress: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  clinicianName: {
    type: String,
    required: true,
  },
  clinicianAddress: {
    type: String,
    required: true,
  },
  drugName: {
    type: String,
    required: true,
  },
  prescribedQuantity: {
    type: Number,
    required: true,
  },
});

module.exports = Prescription = mongoose.model(
  "Prescription",
  prescriptionSchema
);
