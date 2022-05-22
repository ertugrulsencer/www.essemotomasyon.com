const mongoose = require('mongoose');
const ServicesSchema = new mongoose.Schema(
    {
      title_tr: {
        type: String,
      },
      title_en: {
        type: String,
      },
      title_ru: {
        type: String,
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
      actions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Actions',
        required: true,
      }
    },
    {
      timestamps: true,
      versionKey: false,
    }
  )

module.exports = mongoose.model('Services', ServicesSchema, "services");