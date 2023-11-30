const express = require("express");
const router = express.Router();
const crudController1 = require("../controllers/reviewController");

router.get("/", crudController1.review_index);
router.post("/", crudController1.review_create_post);
router.get("/:id", crudController1.review_details);
router.patch("/:id", crudController1.review_update);
router.delete("/:id", crudController1.review_delete);

module.exports = router;