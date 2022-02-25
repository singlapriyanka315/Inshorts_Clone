import News from '../modal/news.js';

// in api calls we have 2 arguments 1-request, 2-response
export const getNews = async (request, response) => {
    try {
        const size = Number(request.query.size);
        const skip = Number(request.query.page);
        console.log(size, skip)

        //find is a mongodb function where we pass object and we can find anything in database
        // but if we leave them empty then all data is loaded from database as no condition is passed
        const data = await News.find({}).limit(size).skip(size * skip);
        // console.log(data.count());
        response.status(200).json(data);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}