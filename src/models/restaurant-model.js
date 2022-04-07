const MongoDB = require("../databases/mongodb")
const RestaurantSchema = require("../schemas/restaurant-schema")
const NormalizeHelper = require("../helpers/normalize-helper")

class RestaurantModel {
    static getModel() {
        const mongoCredentials = NormalizeHelper.getMongoCredentials()

        const restaurantConnection = MongoDB.getOrCreateConnection(mongoCredentials)

        return restaurantConnection.model('restaurant', RestaurantSchema, 'restaurants')
    }

    static async getData({ query = null, limit = 1000 }) {
        const model = RestaurantModel.getModel()

        query.deletedAt = null

        return model.find(query).limit(limit).lean()
    }

    static async insertOne(data) {
        const model = RestaurantModel.getModel()

        const restaurant = await model.findOne({ id: data.id, deletedAt: null })

        if(restaurant) throw { status: 400, message: `restaurant with id ${data.id} already exists` }
        
        return model.insertMany(data)
    }

    static async updateOne(id, data) {
        const model = RestaurantModel.getModel()

        const restaurant = await model.findOne({ id, deletedAt: null })

        if (!restaurant) throw { statusCode: 404, message: `restaurant with id ${id} not found` }

        const updatedRestaurant = NormalizeHelper.mergeNestedObjects(restaurant._doc, data)

        restaurant.set(updatedRestaurant)

        return restaurant.save()
    }

    static async deleteOne(id) {
        const model = RestaurantModel.getModel()

        const restaurant = await model.findOne({ id, deletedAt: null })

        if(!restaurant) throw { status: 404, message: `restaurant with id ${id} not found` }

        restaurant.set({ deletedAt: new Date() })

        return restaurant.save()
    }
}

module.exports = RestaurantModel