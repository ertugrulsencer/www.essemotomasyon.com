const mongoose = require('mongoose');

const ActionsSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
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
    text_tr: {
      type: String,
      required: true,
    },
    text_en: {
      type: String,
      required: true,
    },
    text_ru: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('Actions', ActionsSchema, "actions");