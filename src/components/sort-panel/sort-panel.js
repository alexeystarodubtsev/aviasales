import React from 'react';
import "./sort-panel.css"
import {CHEAP, FAST} from "../../payloads"
import { ChangeSort } from '../../actions';
import {connect} from 'react-redux';

const SortPanel = ({sort, ChangeSort}) => {
    const buttons =[
            {title : "САМЫЙ ДЕШЁВЫЙ",
             code : CHEAP}, 
            {title : "САМЫЙ БЫСТРЫЙ",
             code : FAST}];

    return (
         
         <div className="searchPanel">
             {buttons.map(b => {
                 return <button key = {b.code} className = {"btn " + (b.code === sort ? "active" : "noactive")} 
                            onClick={() => {ChangeSort(b.code)}} >{b.title}</button>
             })}
         </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        sort : state.sort, 
  
    }
  }


  
  export default connect(mapStatetoProps,{ChangeSort})(SortPanel)