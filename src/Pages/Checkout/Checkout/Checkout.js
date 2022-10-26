import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { id, author, category, title, courseFee, description, publishedDate, ratings, thumbnail } = course;
    return (
        <div>
            this is checkout page title:  {title}
        </div>
    );
};

export default Checkout;