// This file allows for communication between the front and the back
import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:5001/api/v1/solardb",
    headers:{
        "Content-type": "application/json"
    }
})