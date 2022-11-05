/**
 * this file initializes input, and formats the output of the DAO
 */

import DailyDAO from "../dao/dailyDAO.js"

class DailyController{
    static async apiGetDaily(req, res, next){

        // Initialize query option.
        const dailyPerPage = req.query.dailyPerPage ? parseInt(req.query.moviesPerPage, 10) : 10
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        // Initialize filters here

        const {dailyList, totalNumDaily} = await DailyDAO.getDaily({
            filters,
            page,
            dailyPerPage,
        })

        // Construct the layout of the response
        let response = {
            daily_production: dailyList,
            page: page,
            filters: filters,
            entries_per_page: dailyPerPage,
            total_documents: totalNumDaily,

        }

        // Convert response to JSON format
        res.json(response)

    }
}

export default DailyController