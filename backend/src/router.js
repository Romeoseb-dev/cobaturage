const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const fishControllers = require("./controllers/fishControllers");
const methodControllers = require("./controllers/methodControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/fishs", fishControllers.browse);
router.get("/methods", methodControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/fishs/:id", fishControllers.read);
router.get("/methods/:id", methodControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/fishs", fishControllers.add);

/* ************************************************************************* */

module.exports = router;
