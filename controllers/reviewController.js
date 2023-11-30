const CrudReview = require("../models/reviewModel");

const review_index = (req, res) => {
	CrudReview.find(function (err, cruds) {
		res.json(cruds);
	});
};
const review_create_post = (req, res) => {
	let crud = new Crud(req.body);
	CrudReview
	  .save()
	  .then((crud) => {
		res.send(crud);
	  })
	  .catch(function (err) {
		console.error(err); 
		res.status(422).send("Review add failed");
	  });
};
const review_details = (req,res)=>{
    CrudReview.findById(req.params.id, function (err, crud) {
		if (!crud) {
			res.status(404).send("No result found");
		} else {
			res.json(crud);
		}
	});
};
const review_update = (req, res) => {
	CrudReview.findByIdAndUpdate(req.params.id, req.body)
		.then(function () {
			res.json("Review updated");
		})
		.catch(function (err) {
			res.status(422).send("Review update failed.");
		});
};
const review_delete = (req, res) => {
	CrudReview.findById(req.params.id, function (err, crud) {
		if (!crud) {
			res.status(404).send("Review not found");
		} else {
			Crud.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("Review deleted");
				})
				.catch(function (err) {
					res.status(400).send("Review delete failed.");
				});
		}
	});
};

module.exports = {
	review_index,
	review_create_post,
	review_details,
	review_update,
	review_delete,
};