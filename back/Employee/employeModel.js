const mongoose = require("mongoose");

const EmployeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
    }
);

module.exports = mongoose.model("Employe", EmployeSchema);