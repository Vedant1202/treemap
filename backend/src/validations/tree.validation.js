const Joi = require('@hapi/joi');
const { objectId } = require('./custom.validation');

const createTree = {
  body: Joi.object().keys({
    common_indian_name: Joi.string().required(),
    botanical_name: Joi.string().required(),
    use: Joi.string().required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    user_by: Joi.object(),
  }),
};

const getTrees = {
  query: Joi.object().keys({
    common_name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTree = {
  params: Joi.object().keys({
    treeId: Joi.string().custom(objectId),
  }),
};

const searchTrees = {
  params: Joi.object().keys({
    query: Joi.string(),
  }),
};

module.exports = {
  createTree,
  getTrees,
  getTree,
  searchTrees,
};
