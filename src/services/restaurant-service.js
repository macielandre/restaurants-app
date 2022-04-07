const RestaurantModel = require("../models/restaurant-model");

class RestaurantService {
    static async insertRestaurant(data) {
        return RestaurantModel.insertOne(data)
    }

    static async getRestaurant(keys) {
        return RestaurantModel.getData({ query: keys })
    }

    static async updateRestaurant(id, data) {
        return RestaurantModel.updateOne(id, data)
    }

    static async deleteRestaurant(id) {
        return RestaurantModel.deleteOne(id)
    }
}

module.exports = RestaurantService