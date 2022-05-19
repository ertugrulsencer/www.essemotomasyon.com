const mongoose = require('mongoose');
const MenusSchema = new mongoose.Schema(
    {
      name: {
        type: String,
      },
      url: {
        type: String,
        required: true,
      },
      type: {
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