const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema(
  {
    title_tr: {
      type: String,
      required: true,
    },
    title_en: {
      type: String,
      required: true,
    },
    title_ru: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Files',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('Products', ProductsSchema, "products");