const express = require("express");
const router = express.Router();

const {
    addProjet,
    getAllProjets,
} = require("./projetController");

router.route("/").post(addProjet).get(getAllProjets);

module.exports = router;
