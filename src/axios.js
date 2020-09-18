import axios from 'axios'

const instance = axios.create({
    baseURL: '...' // api url (cloud function url)
})

export default instance