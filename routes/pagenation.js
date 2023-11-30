const router = require("express").Router();
const Crud = require("../models/productModel");
const data = require("../config/dataProducts.json");

router.get("/data", async (req, res) => {
	try {
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		const search = req.query.search || "";

		const data = await Crud.find({ name: { $regex: search, $options: "i" } })
			.skip(page * limit)
			.limit(limit);

		const total = await Crud.countDocuments({
			name: { $regex: search, $options: "i" },
		});

		const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			data,
		};
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Server Error" });
	}
});
module.exports = router;