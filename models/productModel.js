const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: [true, " Name is required"],
		max: [255],
	},
	description: {
		type: String,
		required: [true, "description can't be blank"],
		max: [1000],
	},
	prize: {
		type: Number,
		min: [0],
	},
	category: {
		type: String,
		required: [true, "Category can't be blank"],
	},
	reviews: {
		type: String,
	},
	
});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");