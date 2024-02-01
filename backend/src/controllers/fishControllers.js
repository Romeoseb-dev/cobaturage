const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const fish = await tables.fish.readAll();
    res.json(fish);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const fish = await tables.fish.read(req.params.id);

    if (fish == null) {
      res.sendStatus(404);
    } else {
      res.json(fish);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const fish = req.body;

  try {
    const insertId = await tables.fish.create(fish);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the comment data from the request body
  const fish = req.body;

  try {
    // Insert the comment into the database
    await tables.fish.update(fish, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the comment data from the request body
  try {
    // Insert the comment into the database
    await tables.fish.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};
