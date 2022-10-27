import React, { createRef } from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, author, category, title, courseFee, description, publishedDate, ratings, thumbnail } = course;

    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("http://www.ansonika.com/learn/sliderimages/slide_7.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content py-20">
                    <div className="max-w-xl">
                        <h1 className="mb-5 md:text-5xl text-3xl font-bold">{title}</h1>
                        <button className="btn px-5 btn-primary lg:hidden"><FaDownload className='mr-2'></FaDownload> Download PDF</button>
                    </div>
                </div>
            </div>
            <div className="container max-w-5xl mx-auto lg:my-10 my-5 p-5">
                <div className="grid lg:grid-cols-6 gap-4">
                    <div className="lg:col-span-4">
                        <div className="card bg-base-100 shadow-xl border">
                            <figure><img className='w-full' src={thumbnail} alt="course thumbnail" /></figure>
                            <div ref={ref} className="card-body">
                                <h2 className="card-title">
                                    {title}
                                </h2>
                                <p>{description.courseDescription}</p>
                                <ul className='list-disc'>
                                    {
                                        (description.courseContent).map((courseCont, index) => <li key={index}>{courseCont}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="card bg-base-100 shadow-xl border sticky top-0">
                            <div className="card-body">
                                <div>
                                    <p className='text-sm text-slate-5002'><strong>Category:</strong> <Link to={`/course/category/${category}`} className='hover:underline'>{category}</Link></p>
                                    <p className='text-sm text-slate-500 border-t border-b py-2 my-2'><strong>Author:</strong> {author}</p>
                                    <p className='text-sm text-slate-500'><strong>Published:</strong> {publishedDate} </p>
                                </div>
                                <div className="text-yellow-500 border-t border-b py-2">Ratings({ratings}*)</div>
                                <div className="card-actions justify-between items-center">
                                    <p className='text-sm text-slate-500'><strong>Course Fee:</strong></p>
                                    <div className="text-xl font-bold text-slate-500">${courseFee}</div>
                                </div>
                                <br />
                                <Pdf targetRef={ref} filename="code-example.pdf">
                                    {({ toPdf }) => <button onClick={toPdf} className='btn btn-accent'><FaDownload className='mr-2'></FaDownload> Download PDF</button>}
                                </Pdf>
                                <Link to={`/checkout/${id}`} className='btn btn-warning'>Get premium access</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;