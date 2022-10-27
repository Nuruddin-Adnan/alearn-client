import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const course = useLoaderData();
    const { author, category, title, courseFee, publishedDate, ratings } = course;
    return (
        <div>
            <div className="container max-w-5xl mx-auto lg:my-10 my-5 p-5">
                <div className="grid lg:grid-cols-6 gap-4">
                    <div className="lg:col-span-4">
                        <div className="card bg-base-100 shadow-xl border">
                            <div className="card-body">
                                <h3 className="card-title border-b mb-3">Billing Details</h3>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Your Full Name</span>
                                    </label>
                                    <input type="text" defaultValue={displayName ? displayName : ''} placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" placeholder="Type here" defaultValue={email ? email : ''} className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Mobile Number</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <textarea className='border rounded p-3 bg-transparent' cols="30" rows="5" placeholder='Address goes here'></textarea>
                                </div>

                                <h3 className="card-title border-b mb-3 mt-5">Payment Method</h3>
                                <div className="form-control">
                                    <label className="flex items-center border rounded p-3 focus-within:border-sky-500">
                                        <input type="radio" name="payment-method" className="radio radio-primary mr-2" />
                                        Cach on delivery
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="flex items-center border rounded p-3 focus-within:border-sky-500">
                                        <input type="radio" name="payment-method" className="radio radio-primary mr-2" />
                                        Card Payment
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="card bg-base-100 shadow-xl border sticky top-0">
                            <div className="card-body">
                                <div>
                                    <h3 className='card-title border-b pb-2 mb-5'>Order Summary</h3>
                                    <p className='text-sm text-slate-500 border rounded p-2 my-2'><strong>Course Name: <br /> </strong> {title}</p>
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
                                <button className='btn btn-warning'> Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;