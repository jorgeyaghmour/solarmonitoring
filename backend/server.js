/**
 * In this file we will
 *  1. Configure an Express server
 *  2. Attach CORS and express.json middleware
 *  3. Specify routes of connection
 * 
 */

import express from "express"   
import cors from "cors"
import solardb from "./api/solardb.route.js"

// App uses express to make the web server
const app = express()

// App will use CORS and express.json for middleware stuff
app.use(cors())
app.use(express.json())

// This is the root, where the server will initially connect . 
// Most routes will be in a separate file
// use the format "/api/v#/database_name"
app.use("/api/v1/solardb", solardb)
app.use("*", (req, res) => res.status(404).json({error: "database not found"}))

// Eexport statements allow files to be imported by other files
export default app