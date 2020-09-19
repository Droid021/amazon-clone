import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-plant-288316.cloudfunctions.net/api'
    //'http://localhost:5001/plant-288316/us-central1/api' // api url (cloud function url)
})

export default instance