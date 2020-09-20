import React from 'react';
import Context from "../../context";
import {connect} from 'react-redux'
import * as actions from "../../actions";
import "./list-tickets.css"
import Ticket from "../ticket"
import SearchPanel from "../sort-panel" ;

const ListTickets = ({tickets, STOPS, AddTickets}) => {
    const {apiService} = React.useContext(Context);
    async function getTickets() {
      let stop = false;
      const searchId = await apiService.getSearchId();
      let startId = 0;
       while (!stop)
       {
          await apiService.getTickets(searchId)
          .then((data) => {
            stop = data.stop;
            
            const newTickets = data.tickets.map((t, index) => {return {...t, id : index + startId}})
            AddTickets(newTickets);
            startId+=newTickets.length
            console.log(newTickets);
          })
          .catch((err) => {console.log("we've got error")});
        ;
      }
    }
    React.useEffect(() => {
      getTickets();
    }, []);
    return (
        
        <div className="listTickets">
            <SearchPanel/>
            
            { tickets.filter(
                (ticket) => {
                    const stops = ticket.segments.map(s => s.stops.length);
                    for (let i = 0; i < stops.length; i++)
                    {
                        for (let j = 0; j < STOPS.length; j++)
                        {
                            if (stops[i] === STOPS[j].qtyStops)
                                return true;
                        }
                    }
                    return false;
                    })
            .map((el) => {
                return <Ticket key = {el.id} ticket={el}/>
            })}
        </div>)
}

const mapStatetoProps = (state) => {
    return {
        tickets : state.tickets, 
        STOPS : state.STOPS
  
    }
  }
  
  
  
  export default connect(mapStatetoProps,actions)(ListTickets)