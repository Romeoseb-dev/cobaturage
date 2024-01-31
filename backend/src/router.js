const express = require("express");

const router = express.Router();

const commentControllers = require("./controllers/commentControllers");
const validateComment = require("./validators/validateComment");

router.get("/comments", commentControllers.browse);
router.get("/comments/:id", commentControllers.read);
router.post("/comments", validateComment, commentControllers.add);
// router.put("/comments/:id", validateComment, commentControllers.edit);
// router.delete("/comments/:id", commentControllers.destroy);

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const fishControllers = require("./controllers/fishControllers");
const methodControllers = require("./controllers/methodControllers");
const ContactControllers = require("./controllers/contactControllers");
const validateFish = require("./validators/validateFish");

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
router.post("/contact", ContactControllers.send);

router.put("/fishs/:id", validateFish, commentControllers.edit);
router.delete("/fishs/:id", fishControllers.destroy);

/* ************************************************************************* */

module.exports = router;
