import {CHEAP, NOSTOP, ONESTOP, TWOSTOP, THREESTOP} from "../payloads";
import sortTickets from "../sort-tickets";
const InitialState = {
    tickets: [],
    sort : CHEAP,
    STOPS : [NOSTOP, ONESTOP, TWOSTOP, THREESTOP]
};

const reducer = (state = InitialState, action) => {
    let tickets;
    switch(action.type) {
        case "TICKETS_LOADED": 
        return {
            ...state,
            tickets : action.payload.sort(sortTickets(state.sort))
        };
        case "ADD_TICKETS" : 
        tickets = [...state.tickets, ...action.payload];
        tickets = tickets.sort(sortTickets(state.sort))
        return {
            ...state,
            tickets
        };
        case "CHANGE_SORT":
            tickets = [...state.tickets];
            tickets = tickets.sort(sortTickets(action.payload))
            return {
                ...state,
                tickets,
                sort : action.payload
            }; 
        case "ADD_STOP" : 
            return {
                ...state,
                STOPS : [...state.STOPS, action.payload]
            }
        case "DELETE_STOP" : 
            return {
                ...state,
                STOPS : state.STOPS.filter(el => el.title !== action.payload.title)
            }
        default: return state;
    }
}

export default reducer;