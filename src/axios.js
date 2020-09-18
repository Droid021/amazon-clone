import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-6dc1b/us-central1/api' // api url (cloud function url)
})

export default instance