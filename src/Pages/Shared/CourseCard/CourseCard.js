import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ crs }) => {
    return (
        <div key={crs.id} className="card bg-base-100 shadow-xl border">
            <figure><img className='w-full' src={crs.thumbnail} alt="course thumbnail" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {crs.title}
                </h2>
                <p>{crs.description.courseDescription}</p>
                <div>
                    <p className='text-sm text-slate-500'><strong>Author:</strong> {crs.author}</p>
                    <p className='text-sm text-slate-500'><strong>Published:</strong> {crs.publishedDate} </p>
                </div>
                <div className="card-actions justify-between">
                    <div className="text-yellow-500">Ratings({crs.ratings}*)</div>
                    <div className="text-xl font-bold text-slate-500">${crs.courseFee}</div>
                </div>
                <Link to='/course-details' className='btn btn-accent'>Course Details</Link>
            </div>
        </div>
    );
};

export default CourseCard;