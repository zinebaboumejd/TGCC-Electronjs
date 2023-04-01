const asyncHandler = require("express-async-handler");
const Employe = require("./employeModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const employeModel = require("./employeModel");

// add employe
const addEmploye = asyncHandler(async (req, res) => {
const {
    name,
    email,
    phone,
    salary,
} = req.body;
if( name === "" || email === "" || phone === "" || salary === "" ){
    res.status(400);
    throw new Error("Veuillez remplir tous les champs");
}

const employe = await Employe.create({
    name,
    email,
    phone,
    salary,
});
if (employe) {
    res.status(201).json({
    _id: employe._id,
    name: employe.name,
    email: employe.email,
    phone: employe.phone,
    salary: employe.salary,
    });
} else {
    res.status(400);
    throw new Error("Invalid employe data");

}
});

// get all employes
const getAllEmployes = asyncHandler(async (req, res) => {
const employes = await Employe.find({});
if (employes) {
    res.status(200).json(employes);
}
});

// get employe by id
const getEmployeById = asyncHandler(async (req, res) => {
const employe = await Employe.findById(req.params.id);
if (employe) {
    res.status(200).json(employe);
}
});


module.exports={
    addEmploye,
    getAllEmployes,
    getEmployeById,
}