import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2>This is course page {course.length}</h2>
        </div>
    );
};

export default Course;