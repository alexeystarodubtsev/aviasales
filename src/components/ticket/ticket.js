import React from 'react';
import "./ticket.css"
import PartTicket from './part-ticket';
import {getStopTitleName} from "../../payloads"
export default ({ticket}) => {
    
    function getPrice(price)
    {
        return price.toLocaleString("fr-FR", {minimumFractionDigits: 0, maximumFractionDigits: 0});
    }
    function ParseDate(dateString) {
        const date = new Date(Date.parse(dateString));
        return `${date.getHours()}:${date.getMinutes()}`;
    }
    return (
        <div className="ticket">
            <div className="PriceWithLogo">
                <div className="price">
                    {getPrice(ticket.price)} Р
                </div>
                <div className="Logo">
                    <img src={`http://pics.avs.io/99/36/${ticket.carrier}.png`}></img>
                </div>
            </div>
            {ticket.segments.map ((el, index) => {
                return (
            <div style ={{display: "flex"}} key = {index}>
              <PartTicket first={`${el.origin} - ${el.destination}`}
                    second={ParseDate(el.date)}/>
              <PartTicket first="В пути"
                    second={`${Math.floor(el.duration / 60)}ч ${el.duration % 60}мин`}/>
             <PartTicket first={getStopTitleName(el.stops.length)}
                    second={el.stops.join(', ')}/>
            </div>)
            })}
            
            
        </div>
    )
}

