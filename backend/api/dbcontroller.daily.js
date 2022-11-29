/**
 * this file initializes input, and formats the output of the DAO
 */

import e from "express"
import DailyDAO from "../dao/dailyDAO.js"
import {ObjectId} from "mongodb"

class DailyController{
    static async apiGetDaily(req, res, next){

        // Initialize query option.
        const dailyPerPage = req.query.dailyPerPage ? parseInt(req.query.moviesPerPage, 10) : 10
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if(req.query.Timestamp){
            filters.Timestamp = req.query.Timestamp
        }else if(req.query.kW){
            filters.kW = parseFloat(req.query.kW)
        }

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


    static async apiAddDaily(req, res, next){
        try {
            // Ideally, I'd like to store the "Timestamp" as an automatically generated Date object
            // Like this: const timestamp = new Date()
            // Unfortunately, due to it's format, I have to store it as a string
            // --Juan David
            const timestamp = req.body.Timestamp
            const kw = parseFloat(req.body.kW)

            const dailyResponse = await DailyDAO.addDaily(timestamp, kw)
            res.json(dailyResponse)
        } catch (e) {
            res.status(500).json({error: e.message})
        }
      
    }

    static async apiDeleteDaily(req, res, next){
        try {
            // There needs to be some kind of user authentication before a delete is executed
            // --Juan David
            const docId = req.query.id
            console.log(docId)
            const dailyResponse = await DailyDAO.delete(docId)
            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }
}

export default DailyController