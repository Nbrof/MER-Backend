const mongoose = require ("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;


const foodSchema = new Schema (

    {
        name: String,
        img: String,
        origin: String,
       


    }, {timestamps: true}
    

);

const Food = model("Food", foodSchema);

module.exports = Food