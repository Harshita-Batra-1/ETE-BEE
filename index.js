require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./database/db");
const crudRoutes = require("./routes/productRoutes");
const crudRoutes1 = require("./routes/reviewRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

connection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

app.use("/api/cruds", crudRoutes);
app.use("/api/cruds", crudRoutes1);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));