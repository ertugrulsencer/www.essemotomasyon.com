const mongoose = require('mongoose');
const AboutUsSchema = new mongoose.Schema(
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
  )

module.exports = mongoose.model('AboutUs', AboutUsSchema, "about-us");