//using axios to call api and we install npm i axios
import axios from 'axios';

const URL = 'http://localhost:8000';

// api calls needs to be handeled so we handel them with try and catch 
export const getNews = async (page, size = 5) => {
    try {
        return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}