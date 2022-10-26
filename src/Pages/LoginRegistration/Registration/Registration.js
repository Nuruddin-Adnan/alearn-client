import { isEmpty } from '@firebase/util';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        setError('');

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // if (isEmpty(name)) {
        //     console.log('nam nai');
        // } else {
        //     console.log('ace');
        // }

        // return;

        createUser(email, password)
            .then(() => {
                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        form.reset();
                        navigate(from, { replace: true })
                    })
                    .catch(error => setError(error.message))
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <div className="hero min-h-screen w-full max-w-full bg-base-200 border-b">
                <div className="hero-content w-full max-w-lg flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-2">Register now!</h1>
                        <p>Welcome to Alearn, the best learning platform </p>
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            {
                                error && <div className="alert alert-error shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Error! {error}</span>
                                    </div>
                                </div>
                            }
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="full name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photoURL' placeholder="photo url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className='text-sm text-center mt-2'>Already have an account? <Link className='font-bold underline hover:text-secondary-500' to='/login'>Login Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Registration;