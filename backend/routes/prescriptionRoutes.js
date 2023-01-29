const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getPrescriptions,
  createPrescription,
} = require("../controllers/prescriptionController");

router.route("/").post(protect, createPrescription);
router.route("/myprescriptions").get(getPrescriptions);

module.exports = router;
