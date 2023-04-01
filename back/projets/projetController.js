const asyncHandler = require("express-async-handler");
const Projet=require("./projetModele")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const employeModel = require("./employeModel");

// add Projet
const addProjet  =asyncHandler(async (req, res) => {
        const { name, description, dateDebut, dateFin, budget, etat, employe } = req.body;
        const projet = new Projet({ name, description, dateDebut, dateFin, budget, etat, employe });
        const createdProjet = await projet.save();
        res.status(201).json(createdProjet);
    }
);

// get all Projets
const getAllProjets = asyncHandler(async (req, res) => {
    const projets = await Projet.find({});
    res.json(projets);
}
);

module.exports={
    addProjet,
    getAllProjets,
}
