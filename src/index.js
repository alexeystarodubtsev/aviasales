import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './components/app/App';
import ErrorBoundry from "./components/error-boundry"
import Context from "./context";
import store from "./store";
import ApiService from "./api-service"

const apiService = new ApiService();
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorBoundry>
        <Context.Provider value = {{apiService}}>
            <Router>
                <App />
            </Router>
        </Context.Provider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

