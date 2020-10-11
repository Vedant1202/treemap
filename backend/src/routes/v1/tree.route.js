const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const treeValidation = require('../../validations/tree.validation');
const treeController = require('../../controllers/tree.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('getTrees'), validate(treeValidation.createTree), treeController.createTree)
  .get(validate(treeValidation.getTrees), treeController.getTrees);

router.route('/:treeId').get(auth('getTrees'), validate(treeValidation.getTree), treeController.getTree);

router.route('/search/:query').get(auth('getTrees'), validate(treeValidation.searchTrees), treeController.searchTrees);

module.exports = router;
