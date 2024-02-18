const express = require("express");

const router = express.Router();

const adminControllers = require("./controllers/adminControllers");
const validateAdmin = require("./validators/validateAdmin");

router.get("/admins", adminControllers.browse);
router.get("/admins/:id", adminControllers.read);
router.post("/admins", validateAdmin, adminControllers.add);
// router.put("/admins/:id", validateAdmin, adminControllers.edit);
// router.delete("/admins/:id", adminControllers.destroy);

const userControllers = require("./controllers/userControllers");
const validateUser = require("./validators/validateUser");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", validateUser, userControllers.add);
// router.put("/users/:id", validateUser, userControllers.edit);
// router.delete("/users/:id", userControllers.destroy);

const commentControllers = require("./controllers/commentControllers");
const validateComment = require("./validators/validateComment");
const validateContact = require("./validators/validateContact");

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
router.post("/contact", validateContact, ContactControllers.send);

router.put("/fishs/:id", validateFish, fishControllers.edit);
router.delete("/fishs/:id", fishControllers.destroy);

/* ************************************************************************* */

module.exports = router;
