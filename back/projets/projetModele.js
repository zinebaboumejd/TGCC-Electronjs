const mongoose = require("mongoose");

const ProjetSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        dateDebut: {
            type: String,
            required: true,
        },
        dateFin: {
            type: String,
            required: true,
        },
        budget: {
            type: String,
            required: true,
        },
        etat: {
            type: String,
            required: true,
        },
        employe: {
            type: String,
            required: true,
        },
    }
);
    