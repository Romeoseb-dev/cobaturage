const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const methods = await tables.methods.readAll();
    res.json(methods);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const method = await tables.methods.read(req.params.id);

    if (method == null) {
      res.sendStatus(404);
    } else {
      res.json(method);
    }
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  read,
};
