const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const { getPharmacies } = require("../controllers/pharmacyController");

router.route("/getall").get(protect, getPharmacies);

module.exports = router;
