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

    static async restaurantUpdate(restaurantUpdateData) {
        const schema = yup.object().shape({
            name: yup.string().min(1).uppercase(),
            address: yup.string().min(1).uppercase(),
            zipcode: yup.string().min(1),
            status: yup.string().min(1).uppercase().oneOf(['CHANGE'])
        })

        return yup.validateSchema(schema, restaurantUpdateData)
    }

    static async restaurantList(restaurantKeys) {
        const schema = yup.object().shape({
            id: yup.number().min(0).max(9999),
            name: yup.string().min(1).uppercase()
        })

        return yup.validateSchema(schema, restaurantKeys)
    }

    static async restaurantId(id) {
        const schema = yup.number().min(0).max(9999).required()

        return yup.validateSchema(schema, id)
    }

}

module.exports = RestaurantValidation