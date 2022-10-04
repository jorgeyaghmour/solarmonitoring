/**
 * This file contains all the routes/URLs of the database.
 * 
 */
import express from "express"

const router = express.Router()

// "/" signifies the URL to the root directory
router.route("/").get((req, res) => res.send("This is the root directory for the Solar Database"))

// export statements allow this file to be imported by other files in the project
export default router