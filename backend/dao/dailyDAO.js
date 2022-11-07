/**
 * Contains the statements that allow us to access the DB and execute CRUD statements
 * 
 * TODO
 *  -Initialize SOLAR_NS in .env
 *  -Program fetch queries
 *  -We are only accessing one collection
 *  -We must create a DAO for every collection we interact with
 * 
 * QUESTIONS regarding CSV
 *  -About labelling: The title of the database has kWh, but the column has kilowatts
 * 
 * Facility/Stattion name
 * 
 */
import {ObjectId} from "mongodb"
let daily // Represents the database

class DailyDAO{
    // Enables access to a database collection
    static async injectDB(conn){
        if(daily){
            return
        }
        try{
            daily = await conn.db(process.env.SOLAR_NS).collection("daily_production")
        }catch(e){
            console.error('Unable to establish collection handle: ' + e)
        }
    }

    // CRUD statements go in this method
    static async getDaily({
        // default query options go here
        filters = null,
        page = 0,
        resultsPerPage = 20

        // non-default values for options are determined in "./api/solardb.controllers.js"

    } = {}) {
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
            cursor = await daily.find(query)
        }catch(e){
            console.error('Unable to issue find command: ' + e) // occurs if solardb is undefined
            
        }

        // Set up how data will be displayedgit . Limits how many documnets appear at once
        const displayCursor = cursor.limit(resultsPerPage).skip(resultsPerPage * page)

        try{
            const dailyList = await displayCursor.toArray()
            const totalNumDaily = await daily.countDocuments(query)

            return {dailyList, totalNumDaily}

        }catch(e){
            console.error('Unable to convert cursor to array or problem counting documents: ' + e)
            return{dailyList: [], totalNumDaily: 0 }
        }
        
    }

    // Creates a new document in the daily collection
    static async addDaily(timestamp, kw){
        try {
            const dailyDoc = {
                Timestamp: timestamp,
                kW: kw,
            }

            return await daily.insertOne(dailyDoc)
        } catch (e) {
            console.error('Unable to post a document in daily: ' + e)
            return {error: e}
        }
    }

    // Deletes a document from the daily collection
    static async deleteDaily(docId){
        try {
            // Again there should be some kind of user authentication here for security
            const deleteResponse = await daily.deleteOne({
                _id: ObjectId(docId)
            })

            return deleteResponse
        } catch (e) {
            console.error('Unable to delete document from daily: ' + e)
            return{error: e}
        }
    }

}

export default DailyDAO