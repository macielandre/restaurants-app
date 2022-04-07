const { Schema } = require('mongoose')

const AddressSchema = {
    zipcode: { type: String, required: true },
    neighborhood: { type: String, required: true },
    street: { type: String, required: true },
    number: { type: String, required: true },
    complement: { type: String, required: true }
}

const RestaurantSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    address: AddressSchema,
    status: { type: String, required: true },
    deletedAt: { type: Date, default: null }
}, { timestamps: true })

module.exports = RestaurantSchema