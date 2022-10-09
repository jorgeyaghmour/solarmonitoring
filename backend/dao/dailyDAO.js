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
            // filtered query statements go here
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

}

export default DailyDAO