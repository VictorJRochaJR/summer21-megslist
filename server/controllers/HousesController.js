export class HouseController extends BaseController {
    constructor() {
        super("api/houses")
        this.router
            .get("", this.getHouses)
            .post("", this.createHouse)
            .put("/:id", this.updateHouse)
            .delete("/:id", this.deleteHouse)
    }



    async deleteHouse(req, res, next) {
        try {
            let house = await houseService.deleteHouse(req.params.id)
            return res.send(house)
        } catch (error) {
            next(error)
        }
    }

    async updateHouse(req, res, next) {
        try {
            let id = req.params.id
            let house = await houseService.updateHouse(id, req.body)
            return res.send(car)
        } catch (error) {
            next(error)
        }
    }
    async createHouse(req, res, next) {
        try {
            let house = await houseService.createHouse(req.body)
            return res.send(house)
        } catch (error) {
            next(error)
        }
    }
    async getHouses(req, res, next) {
        try {
            let house = await houseService.getHouses()
            return res.send(houses)
        } catch (error) {
            next(error)
        }
    }


}
