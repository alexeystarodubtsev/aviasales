import axios from 'axios';

export default class ApiService {
    
    host = "https://front-test.beta.aviasales.ru"
    getTickets(searchId) {
        return axios.get(`${this.host}/tickets?searchId=${searchId}`)
            .then(response => response.data);
    }

    async getSearchId() {
        return await axios.get(`${this.host}/search`)
           .then(response => response.data.searchId);
        
   }


    
}