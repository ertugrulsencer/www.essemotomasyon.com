const mongoose = require('mongoose');
const MenusSchema = new mongoose.Schema(
    {
      name_tr: {
        type: String,
      },
      name_en: {
        type: String,
      },
      name_ru: {
        type: String,
      },
      url: {
        type: String,
        required: true,
      },
      order: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  )

module.exports = mongoose.model('Menus', MenusSchema, "menus");