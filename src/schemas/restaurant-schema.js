const { Schema } = require('mongoose')

const RestaurantSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    zipcode: { type: String, required: true },
    status: { type: String, required: true },
    deletedAt: { type: Date, default: null }
}, { timestamps: true, strict: true })