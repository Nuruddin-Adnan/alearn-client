import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();


    return (
        <div>
            This is home page {categories.length}
        </div>
    );
};

export default Home;