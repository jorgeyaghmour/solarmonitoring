/**
 * This file contains all the routes/URLs of the database.
 * 
 */
 import express from "express"
 import DailyController from "../api/solardb.controller.js"
 
 const router = express.Router()
 
 // "/" signifies the URL to the root directory
 // router.route("/").get((req, res) => res.send("This is the root directory for the Solar Database"))
 
 // Uncomment when DAO is complete
 router.route("/daily")
    .get(DailyController.apiGetDaily)
    .post(DailyController.apiAddDaily)
    .delete(DailyController.apiDeleteDaily)

 
 // export statements allow this file to be imported by other files in the project
 export default router