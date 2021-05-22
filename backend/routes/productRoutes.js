const express = require("express");
const router = express.Router();

const { getAllProducts, getProductById } = require("../controller/productControllers");

//Get all products from db
//GET api/products
//@Access public
router.get("/", getAllProducts);


//Get a single  product by id from db
//GET api/products/:id
//@Access public
router.get("/:id", getProductById);

module.exports = router;