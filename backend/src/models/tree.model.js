const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const treeSchema = mongoose.Schema(
  {
    botanical_name: {
      type: String,
      required: true,
      trim: true,
    },
    common_indian_name: {
      type: String,
      required: true,
      trim: true,
    },
    use: {
      type: String,
      required: true,
      trim: true,
    },
    longitude: {
      type: String,
      required: true,
      trim: true,
    },
    latitude: {
      type: String,
      required: true,
      trim: true,
    },
    user_by: {
      type: Object,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
treeSchema.plugin(toJSON);
treeSchema.plugin(paginate);

/**
 * @typedef Tree
 */
const Tree = mongoose.model('Tree', treeSchema);

module.exports = Tree;
