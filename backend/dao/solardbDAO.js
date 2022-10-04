/**
 * Contains the statements that allow us to access the DB and execute CRUD statements
 * 
 * TODO
 *  -Initialize SOLAR_NS in .env
 *  -Program fetch queries
 *  -We are only accessing one collection
 */
let solardb // Represents the database

class SolardbDAO{
    // Enables access to a database collection
    static async injectDB(conn){
        if(solardb){
            return
        }
        try{
            solardb = await conn.db(process.env.SOLAR_NS).collection(/*Insert the name of the collection we want to access here */)
        }catch(e){
            console.error('Unable to establish connection: ' + e)
        }
    }

    // CRUD statements go in here
    static async getData({
        // query options go here
        filters = null
        
    } = {}) {
        // query definitions
        let query
        if(filters){
            // query statements with filters go here
        } else{
            // retrieve ALL data statement goes here
        }

        // represents returned data
        let cursor

        // query executions
        try{
            cursor = await solardb.find(query)
        }catch(e){
            console.error('Unable to execute command: ' + e)
            
        }
    }

    

}