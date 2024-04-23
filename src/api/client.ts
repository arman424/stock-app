import axios from 'axios'

axios.defaults.baseURL = process.env.VITE_API_BASE_URL;

const client =  axios.create({
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
    params: {
        // apikey: process.env.VITE_API_KEY
        apikey: 'demo'
    }
});

export {
    client
}
