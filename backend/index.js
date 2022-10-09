import app from "./server.js"   // imports root
import mongodb from "mongodb"   // helps conect to mongodb
import dotenv from "dotenv"     // helps configure environment variables automatically
import DailyDAO from "./dao/dailyDAO.js"    // DAO file contains CRUD material

// configures dotenv
dotenv.config()
const MongoClient = mongodb.MongoClient 

// This is the port where our local server will listen to the MongoDB Atlas server
const port = process.env.PORT || 8000

// Connects local VSC server to the MongoDB Atlas server
MongoClient.connect(
    process.env.SOLAR_DB_URI,
    {
        maxPoolSize: 50,
        waitQueueTimeoutMS: 2500
    }
)
.catch(err => { // If there is an error, this is executed
    console.error(err.stack)
    process.exit(1)
})
.then(async client => { // If the connection is successful, this is executed
    // Commented out while testing functionality
    // await SolardbDAO.injectDB(client)
    app.listen(port, () => {
        console.log('listening on port: ' + port)
    })
})