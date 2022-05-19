const mongoose = require('mongoose');
const SettingsSchema = new mongoose.Schema(
  {
    site_name: {
      type: String,
      required: true,
    },
    currency_symbol: {
      type: String,
      required: true,
    },
    copyright: {
      type: String,
      required: true,
    },
    google_analytics_id: {
      type: String,
      required: true,
    },
    // Yapılacak
    // languages: {
    //   type: [mongoose.Schema.Types.ObjectId],
    //   ref: 'Languages',
    //   required: true,
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model('Settings', SettingsSchema, "settings");