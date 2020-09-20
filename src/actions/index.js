const TicketsLoaded = (tickets) => {
    return {type : "TICKETS_LOADED", 
            payload : tickets
            }
    }
const AddTickets = (tickets) => {
    return {type : "ADD_TICKETS", 
            payload : tickets
            }
    }
const ChangeSort = (sort) => {

    return {
        type : "CHANGE_SORT", 
        payload : sort
        }
}

const AddStop = (stop) => {
    return {
        type : "ADD_STOP",
        payload : stop
    }
}
const DeleteStop = (stop) => {
    return {
        type : "DELETE_STOP",
        payload : stop
    }
}    

export {TicketsLoaded, AddTickets,ChangeSort, AddStop, DeleteStop}