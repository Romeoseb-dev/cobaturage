const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const fishs = await tables.fishs.readAll();
    res.json(fishs);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const fish = await tables.fishs.read(req.params.id);

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
module.exports = {
  browse,
  read,
  add,
};
