import React from 'react';
import './App.css';
import ListTikets from "../list-tickets";
import Filter from "../filter"

function App() {

  return (
    <div className="App">
      <h2>Welcome to aviasales</h2>
      
      <div className="content">
        <Filter/>
        <ListTikets/>
      </div>
    </div>
  );
}
export default App;
