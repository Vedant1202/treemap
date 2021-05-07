const httpStatus = require('http-status');
const fetch = require('node-fetch');
const { pick } = require('lodash');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { treeService } = require('../services');
const config = require('../config/config');

const createTree = catchAsync(async (req, res) => {
  const treebody = req.body;
  const tree = await treeService.createTree(treebody);
  res.status(httpStatus.CREATED).send(tree);
});

const getTrees = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['common_indian_name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await treeService.queryTrees(filter, options);
  res.send(result);
});

const getTree = catchAsync(async (req, res) => {
  const tree = await treeService.getTreeById(req.params.treeId);
  if (!tree) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tree not found');
  }
  res.send(tree);
});

const searchTrees = catchAsync(async (req, res) => {
  const query = req.params.query;
  const url = 'https://trefle.io/api/v1/plants/search?token=' + config.trefleToken + '&q=' + query;
  const response = await fetch(url);
  const json = await response.json();
  res.send(json);
});

module.exports = {
  createTree,
  getTrees,
  getTree,
  searchTrees,
};
