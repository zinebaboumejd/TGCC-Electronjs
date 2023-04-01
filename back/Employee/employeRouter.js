const express = require("express");
const router = express.Router();
const {
    addEmploye,
    getAllEmployes,
    getEmployeById,
} = require("./employeController");

router.route("/").post(addEmploye).get(getAllEmployes);





module.exports = router;