import React from 'react';
import "./ticket.css"
import PartTicket from './part-ticket';
import {getStopTitleName} from "../../payloads"
import {format} from "date-fns"
export default ({ticket}) => {
    
    function getPrice(price)
    {
        return price.toLocaleString("fr-FR", {minimumFractionDigits: 0, maximumFractionDigits: 0});
    }
    function ParseDate(dateString, duration) {
        const date = new Date(Date.parse(dateString));
        const time2 = new Date(date.getTime() + duration*60000);
        return `${format(date, "HH:mm")} - ${format(time2, "HH:mm")}`;
    }
    return (
        <div className="ticket">
            <div className="PriceWithLogo">
                <div className="price">
                    {getPrice(ticket.price)} Р
                </div>
                <div className="Logo">
                    <img src={`http://pics.avs.io/99/36/${ticket.carrier}.png`} alt="Company logo"></img>
                </div>
            </div>
            {ticket.segments.map ((el, index) => {
                return (
            <div style ={{display: "flex"}} key = {index}>
              <PartTicket first={`${el.origin} - ${el.destination}`}
                    second={ParseDate(el.date, el.duration)}/>
              <PartTicket first="В пути"
                    second={`${Math.floor(el.duration / 60)}ч ${el.duration % 60}мин`}/>
             <PartTicket first={getStopTitleName(el.stops.length)}
                    second={el.stops.join(', ')}/>
            </div>)
            })}
            
            
        </div>
    )
}

