const yup = require('../libs/yup')

class RestaurantValidation {
    static async restaurantInsert(restaurant) {
        const schema = yup.object().shape({
            id: yup.number().min(0).max(9999),
            name: yup.string().min(1).uppercase(),
            address: yup.string().min(1).uppercase(),
            zipcode: yup.string().min(1),
            status: yup.string().min(1).uppercase()
        })

        return yup.validateSchema(schema, restaurant)
    }
}

module.exports = RestaurantValidation