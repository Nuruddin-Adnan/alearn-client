import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const Courses = () => {
    const course = useLoaderData();
    const [allCourse, setAllCourse] = useState([]);
    const [loadingSpiner, setLoadingSpiner] = useState(true);

    useEffect(() => {
        setLoadingSpiner(true);
        fetch('https://alearn-server.vercel.app/course')
            .then(res => res.json())
            .then(data => {
                setAllCourse(data);
                setLoadingSpiner(false);
            })
    }, [])

    return (
        <div>
            {
                loadingSpiner ?
                    <div className='min-h-screen text-center text-sky-500 text-3xl'>loading...</div>
                    :
                    <>
                        <h2 className='text-3xl font-bold'>{allCourse.length === course.length ? 'All' : course[0].category} Courses({course.length})</h2>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-5">
                            {
                                course.map(crs => <CourseCard key={crs.id} crs={crs}></CourseCard>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default Courses;