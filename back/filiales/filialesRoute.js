const express = require("express");
const router = express.Router();

const {
    addFiliale,
    getAllFiliales,
} = require("./filialesController");

router.route("/").post(addFiliale).get(getAllFiliales);

