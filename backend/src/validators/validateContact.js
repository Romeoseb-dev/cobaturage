const Joi = require("joi");

const getContactSchema = () => {
  return Joi.object({
    name: Joi.string().max(15).required(),
    surname: Joi.string().max(15).required(),
    email: Joi.string().email().required(),
    number: Joi.number().max(9999999999).required(),
    message: Joi.string().max(255).required(),
  });
};

const validateContact = (req, res, next) => {
  const schema = getContactSchema();

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

module.exports = validateContact;
