// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all admins from the database
    const admins = await tables.admin.readAll();

    // Respond with the admins in JSON format
    res.status(200).json(admins);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific admin from the database based on the provided ID
    const admin = await tables.admin.read(req.params.id);

    // If the admin is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the admin in JSON format
    if (admin == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(admin);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the admin data from the request body
  const admin = req.body;

  try {
    // Insert the admin into the database
    await tables.admin.update(admin, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the admin data from the request body
  const admin = req.body;

  try {
    // Insert the admin into the database
    const insertId = await tables.admin.create(admin);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted admin
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the admin data from the request body
  try {
    // Insert the admin into the database
    await tables.admin.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
