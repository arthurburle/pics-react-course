import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7FIRiO8Ig84eyR3oS2osjy3Xq1mAh9tyLeUPYOM3oo4'
    }
});