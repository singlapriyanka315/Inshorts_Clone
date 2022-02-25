import express from 'express';

import { getNews } from '../controller/news-controller.js';

const route = express.Router();

//route takes 3 arguements first is path sec is optional(middleware) third is call back function i.e api call
route.get('/news', getNews);


export default route;