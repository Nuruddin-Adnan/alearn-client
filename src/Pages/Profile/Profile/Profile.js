import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const [error, setError] = useState('');
    const { user, verifyEmail, notify } = useContext(AuthContext);
    const { displayName, photoURL, email, emailVerified } = user;

    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => {
                notify('Email varified link send to your email.')
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className='container mx-auto p-5 my-10'>
            <h2 className='lg:text-5xl text-3xl text-center font-bold mb-5 pb-5'>Profile</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl border max-w-5xl mx-auto">
                <figure className='overflow-hidden w-full lg:max-w-[300px]'><img className='w-full rounded' src={photoURL} alt="user avatar" /></figure>
                <div className="card-body">
                    {
                        error && <div className="alert alert-error shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Error! {error}</span>
                            </div>
                        </div>
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" defaultValue={email ? email : 'no value'} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={displayName ? displayName : 'no value'} className="input input-bordered" />
                    </div>
                    <p>Email varification: <strong>{emailVerified ? 'Varified' : `Not Varified yet`} {emailVerified || <button onClick={handleVerifyEmail} className='btn btn-sm'>Varified Now</button>}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Profile;