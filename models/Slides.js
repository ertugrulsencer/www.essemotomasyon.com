const mongoose = require('mongoose');
const SlidesSchema = new mongoose.Schema(
  {
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Files',
      required: true,
    },
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
    description_tr: {
      type: String,
      required: true,
    },
    description_en: {
      type: String,
      required: true,
    },
    description_ru: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model('Slides', SlidesSchema, "slides");