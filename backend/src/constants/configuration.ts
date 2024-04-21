import * as Joi from 'joi';

export default () => {
  const whitelist = (process.env.ALLOWED_ORIGINS || '').split(',');

  return {
    port: process.env.PORT,
    whitelist,
    cacheExpireTime: process.env.CACHE_EXPIRE_TIME,
    targetSearchDriver: process.env.TARGET_SEARCH_DRIVER,
    secrets: {
      APITokenSecret: process.env.API_TOKEN_SECRET,
    },
  };
};

export const validationSchema = Joi.object({
  PORT: Joi.string().required(),
  TARGET_SEARCH_DRIVER: Joi.string().required(),
  // ALLOWED_ORIGINS: Joi.string().optional(),
  API_TOKEN_SECRET: Joi.string().required().min(16),
  CACHE_EXPIRE_TIME: Joi.number().min(0).required(),
});
