import Joi from 'joi';

const deleteAccountSchema = Joi.object({
  message: Joi.string().valid('Account deleted!').required()
});

export {deleteAccountSchema};
