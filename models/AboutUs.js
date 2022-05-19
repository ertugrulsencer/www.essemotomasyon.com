const mongoose = require('mongoose');
const AboutUsSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
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