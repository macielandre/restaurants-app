const yup = require('../libs/yup')

class RestaurantValidation {
    static async restaurantValidation(restaurant) {
        const schema = yup.object().shape({
            id: yup.number().min(0).max(9999),
            name: yup.string().min(1).uppercase(),
            address: yup.string().min(1).uppercase(),
            latitude: yup.string().min(1),
            longitude: yup.string().min(1),
            status: yup.string().min(1).uppercase()
        })

        return yup.validateSchema(schema, restaurant)
    }
}