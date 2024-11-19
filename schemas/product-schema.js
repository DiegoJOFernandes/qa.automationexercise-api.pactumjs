import Joi from 'joi';

const productSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  price: Joi.string().required(),
  brand: Joi.string().optional(),
  category: Joi.object({
    usertype: Joi.object({
      usertype: Joi.string().required(),
    }).required(),
    category: Joi.string().required(),
  }).required()
}).strict();

const responseSchema = Joi.object({
  responseCode: Joi.number().valid(200).required(),
  products: Joi.array().items(productSchema).required(),
}).strict();

export { productSchema, responseSchema };
