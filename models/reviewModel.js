const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	Content: {
		type: String,
		required: [true, " Content is required"],
		max: [500],
	},
    Rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1],
        max:[5]
    },
    Author:{
        type: String,
        required: [true, "Author name is required"],
    },
    CreatedAt:{
        type: [Number,Number,Number],
        required: [true, "Date is required in format of date/month/year"],
    }
	
});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");