import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../components/NewsCart';

const Categories = () => {
    const { data: news } = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className='font-semibold mb-3'>Aladeen News Home</h2>
            <div className="">
                {
                    news.map(singleNews => <NewsCart key={singleNews._id} news={singleNews}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default Categories;