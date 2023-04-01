const mongoose = require("mongoose");

const FilialeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
      
       
    }
);

module.exports = mongoose.model("Filiale", FilialeSchema);


