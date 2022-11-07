/**
 * This file redirects to all the routes that execute HTTP requests
 * And by extension make the back end do stuff
 */
import http from "../http-common"

class DailyDataService{
    getAll(page = 0){
        return http.get('/daily?page='+page)
    }
    find(query, by = "Timestamp", page = 0){
        return http.get("/daily?"+by+"="+query+"&page="+page)
    }
    addDailyDoc(data){  // "data" is received from the body of the request
        return http.post("/daily", data)
    }
    deleteDailyDoc(id){
        return http.delete('/daily?id='+id)
    }
}

export default DailyDataService