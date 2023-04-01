const asyncHandler = require("express-async-handler");
const filiale=require("./filialesModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// add filiale
const addFiliale  =asyncHandler(async (req, res) => {
        const { name, description } = req.body;
        const filiale = new Filiale({ name, description });
        const createdFiliale = await filiale.save();
        res.status(201).json(createdFiliale);
    }
);

// get all filiales
const getAllFiliales = asyncHandler(async (req, res) => {
    const filiales = await Filiale.find({});
    res.json(filiales);
}
);

module.exports={
    addFiliale,
    getAllFiliales,
}
