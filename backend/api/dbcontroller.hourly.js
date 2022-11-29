import HourlyDAO from "../dao/hourlyDAO.js";

class HourlyController{
    static async apiGetHourly(req, res, next){
        const hourlyPerPage = req.query.hourlyPerPage ? parseInt(req.query.hourlyPerPage, 10) : 30
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if(req.query.Timestamp){
            filters.Timestamp = req.query.Timestamp
        }else if(req.query.kW){
            filters.kW = req.query.kW
        }

        const {hourlyList, totalNumHourly} = await HourlyDAO.getHourly({
            filters,
            page,
            hourlyPerPage
        })

        // Construct the layout of the response
        let response = {
            hourly_production: hourlyList,
            page: page,
            filters: filters,
            entries_per_page: hourlyPerPage,
            total_documents: totalNumHourly
        }

        // Convert response to JSON format
        res.json(response)
    }

    static async apiAddHourly(req, res, next){
        try {
            const timestamp = req.body.Timestamp
            const kw = parseFloat(req.body.kW)

            const hourlyResponse = await HourlyDAO.addHourly(timestamp, kw)
            res.json(hourlyResponse)
        } catch (e) {
            res.status(500).json({error: e.message})
        }
        
    }

    static async apiDeleteHourly(req, res, next){
        try {
            const docId = req.query.id
            console.log(docId)
            const hourlyResponse = await HourlyDAO.deleteHourly(docId)
            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }        
    }
}

export default HourlyController