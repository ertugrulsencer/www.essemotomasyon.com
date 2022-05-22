const mongoose = require("mongoose");
const ContactsSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        telephone: {
            type: String,
            required: true,
        },
        support_phone: {
            type: String,
            required: true,
        },
        map_url: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.model('Contacts', ContactsSchema, "contacts");