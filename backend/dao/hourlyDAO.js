import { ObjectId } from "mongodb";
let hourly

class HourlyDAO{
    static async injectDB(conn){
        if(hourly){
            return
        }
        try {
            hourly = await conn.db(process.env.SOLAR_NS).collection("hourly_production")
        } catch (e) {
            console.error("Unable to establish connection handle: " + e)
        }
    }

    static async getHourly({
        filters = null,
        page = 0,
        resultsPerPage = 10

        // non-default values for options are passed by "./api/dbcontroller.hourly.js"
    } = {}){
        // definition of query statements
        let query

        if(filters){
            if("Timestamp" in filters){
                query = {"Timestamp": {$eq: filters["Timestamp"]}}
            }else if("kW" in filters){
                query = {"kW": {$eq: filters["kW"]}}
            }
        }

        // represents returned data
        let cursor

        // execution of query statements
        // if query is not explicitly defined, then ALL data within the collection shall be returned
        try{
            cursor = await hourly.find(query)
        }catch(e){
            console.error('Unable to issue find command: ' + e) // occurs if solardb is undefined
        }
        
        // Set up how data will be displayedgit . Limits how many documnets appear at once
        const displayCursor = cursor.limit(resultsPerPage).skip(resultsPerPage * page)

        try{
            const hourlyList = await displayCursor.toArray()
            const totalNumHourly = await hourly.countDocuments(query)

            return {hourlyList, totalNumHourly}

        }catch(e){
            console.error('Unable to convert cursor to array or problem counting documents: ' + e)
            return{hourlyList: [], totalNumHourly: 0 }
        }


    }

    static async addHourly(timestamp, kw){
        try {
            const hourlyDoc = {
                Timestamp: timestamp,
                kW: kw
            }

            return await hourly.insertOne(hourlyDoc)
        } catch (e) {
            console.error("Unable to post a document in hourly: " + e)
            return {error: e}
        }
    }

    static async deleteHourly(docId){
        try {
            const deleteResponse = await hourly.deleteOne({
                _id: ObjectId(docId)
            })

            return deleteResponse
        } catch (e) {
            console.error("Unable to delete document from hourly: " + e)
            return{error: e}
        }
    }
}

export default HourlyDAO