const Crud = require("../models/productModel");

const crud_index = (req, res) => {
	Crud.find(function (err, cruds) {
		res.json(cruds);
	});
};

const crud_create_post = (req, res) => {
	let crud = new Crud(req.body);
	crud
	  .save()
	  .then((crud) => {
		res.send(crud);
	  })
	  .catch(function (err) {
		console.error(err); 
		res.status(422).send("Product add failed");
	  });
};

const crud_details = (req, res) => {
	Crud.findById(req.params.id, function (err, crud) {
		if (!crud) {
			res.status(404).send("No result found");
		} else {
			res.json(crud);
		}
	});
};

const crud_update = (req, res) => {
	Crud.findByIdAndUpdate(req.params.id, req.body)
		.then(function () {
			res.json("Product updated");
		})
		.catch(function (err) {
			res.status(422).send("Product update failed.");
		});
};

const crud_delete = (req, res) => {
	Crud.findById(req.params.id, function (err, crud) {
		if (!crud) {
			res.status(404).send("product not found");
		} else {
			Crud.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("product deleted");
				})
				.catch(function (err) {
					res.status(400).send("product delete failed.");
				});
		}
	});
};

module.exports = {
	crud_index,
	crud_details,
	crud_create_post,
	crud_update,
	crud_delete,
};