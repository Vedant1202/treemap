const httpStatus = require('http-status');
const { Tree } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a tree
 * @param {Object} treeBody
 * @returns {Promise<Tree>}
 */
const createTree = async (treeBody) => {
  const tree = await Tree.create(treeBody);
  return tree;
};

/**
 * Query for trees
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTrees = async (filter, options) => {
  const trees = await Tree.paginate(filter, options);
  return trees;
};

/**
 * Get tree by id
 * @param {ObjectId} id
 * @returns {Promise<Tree>}
 */
const getTreeById = async (id) => {
  return Tree.findById(id);
};

module.exports = {
  createTree,
  queryTrees,
  getTreeById,
};
