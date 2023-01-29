const Prescription = require("../models/prescriptionModel");
const asyncHandler = require("express-async-handler");

const getPrescriptions = asyncHandler(async (req, res) => {
  const prescriptions = await Prescription.find({});
  res.json(prescriptions);
});

const createPrescription = asyncHandler(async (req, res) => {
  const {
    issuedDate,
    patientName,
    patientAddress,
    dob,
    clinicianName,
    clinicianAddress,
    drugName,
    prescribedQuantity,
  } = req.body;

  const prescription = new Prescription({
    issueDate: issuedDate,
    patientName,
    user: req.user._id || "",
    patientAddress,
    dateOfBirth: dob,
    clinicianName,
    clinicianAddress,
    drugName,
    prescribedQuantity,
  });

  const createdPrescription = await prescription.save();
  res.status(201).json(createdPrescription);
});

module.exports = {
  createPrescription,
  getPrescriptions,
};
