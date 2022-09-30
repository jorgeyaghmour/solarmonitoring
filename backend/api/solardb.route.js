import express from "express"

const router = express.Router()

// "/" signifies the root URL
router.route("/").get((req, res) => res.send("This is the root directory for the Solar Database"))

// export statements allow this file to be imported by other files in the project
export default router