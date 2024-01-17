const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const comment = await tables.comment.readAll();
    res.json(comment);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const comment = await tables.comment.read(req.params.id);

    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.json(comment);
    }
  } catch (err) {
    next(err);
  }
};

const send = async (req, res, next) => {
  const comment = req.body;

  try {
    const insertId = await tables.comment.create(comment);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  read,
  send,
};
