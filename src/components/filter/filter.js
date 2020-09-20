import React from 'react';
import "./filter.css";
import {NOSTOP, ONESTOP, TWOSTOP, THREESTOP }  from "../../payloads"
import {AddStop, DeleteStop}  from "../../actions";
import {connect} from 'react-redux'

const Filter = ({STOPS, AddStop,DeleteStop}) => {
    
    const StopContain = (stop) => {
        if (stop === "ALL")
            return STOPS.length === 4;
        return STOPS.filter(el => el.title === stop).length > 0;
    }
    const mark = (e,f) => {
        const stopNames = [NOSTOP, ONESTOP, TWOSTOP, THREESTOP]
        if (f.title === "ALL" && e.target.checked)
        {
            stopNames.forEach(el => {if (!StopContain(el.title)) AddStop(el); })
        }    
        if (f.title !=="ALL")
        {
            if (e.target.checked )
                 AddStop(f);
            else
                 DeleteStop(f);
        }
    };
    const filterPositions = [
        {titleName : "Вce", title : "ALL"},
        NOSTOP, ONESTOP, TWOSTOP, THREESTOP
        ];

    return (
        <div className = "filter">
            <div style={{marginBottom : "1rem"}}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            {filterPositions.map((f) => {
                return (
                    <div className = "pos" key={f.title}>
                        <input 
                            type="checkbox" 
                            checked = {StopContain(f.title) } 
                            onChange = {(e) => mark(e,f)}
                            style = {{backgroungColor: "#2196F3"}} />
                        <label>{f.titleName}</label>
                    </div>
                )
            })}
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        STOPS : state.STOPS
  
    }
  }
  
  
  
  export default connect(mapStatetoProps,{AddStop, DeleteStop})(Filter)