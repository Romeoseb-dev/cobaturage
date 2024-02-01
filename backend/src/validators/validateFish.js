const Joi = require("joi");

const getFishSchema = () => {
  return Joi.object({
    id: Joi.number().integer().positive(),
    name: Joi.string().max(25).required(),
    weight: Joi.string().max(10).required(),
    picture: Joi.string().uri().required(),
    year: Joi.number().integer().positive().required(),
    methods_id: Joi.number().integer().positive().required(),
  });
};

const validateFish = (req, res, next) => {
  const schema = getFishSchema();

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

module.exports = validateFish;
