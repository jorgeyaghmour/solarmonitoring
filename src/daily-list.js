import React, {useEffect, useState} from "react"
import DailyDataService from "./services/daily"
import { Link } from "react-router-dom"
import axios from "axios"

const DailyItem = (props) => {
    return React.createElement("div", {}, [
        React.createElement("p", {}, props.Timestamp),
        React.createElement("p", {}, props.kW),
    ])
}

function DailyList(){
    const [data, setData] = useState([])

    // useEffect(() =>{
    //     fetchData()
    // }, [])

    function fetchData(){
        DailyDataService.getAll()
        .then(response => {
            console.log(response)
            setData(response.data)
        })
        .catch(e =>{
            console.log(e)
        })
    }

    return(
        <div>
            {/* <ul>
                {data.map((data, index) => (
                    <li>
                        <DailyItem />
                    </li>
                ))}
            </ul> */}
            <h6>THIS IS A TEST</h6>
        </div>
    )
}

export default DailyList