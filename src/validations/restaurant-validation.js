const yup = require('../libs/yup')

class RestaurantValidation {
    static async restaurantInsert(restaurant) {
        const schema = yup.object().shape({
            id: yup.number().min(0).max(9999).required(),
            name: yup.string().min(1).uppercase().required(),
            address: yup.string().min(1).uppercase().required(),
            zipcode: yup.string().min(1).required(),
            status: yup.string().min(1).uppercase().oneOf(['CHANGE']).required()
        })

        return yup.validateSchema(schema, restaurant)
    }

    static async restaurantList(restaurantKeys) {
        const schema = yup.object().shape({
            id: yup.number().min(0).max(9999),
            name: yup.string().min(1).uppercase()
        })

        return yup.validateSchema(schema, restaurant)
    }
}

module.exports = RestaurantValidation