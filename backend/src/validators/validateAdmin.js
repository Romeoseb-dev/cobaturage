const Joi = require("joi");

const getAdminSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    mail: Joi.string().max(55).presence("required"),
    password: Joi.string().max(255).presence("required"),
  });
};

const validateAdmin = (req, res, next) => {
  const schema = getAdminSchema();

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateAdmin;
