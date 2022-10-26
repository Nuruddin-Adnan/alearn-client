import React from 'react';

const Faq = () => {
    return (
        <div className='container mx-auto max-w-5xl'>
            <div className='md:p-10 p-5 my-10'>
                <h2 className='text-3xl font-bold mb-4'>FAQ</h2>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium">
                        What do you need to get started?
                    </div>
                    <div className="collapse-content">
                        <p>Just need the source file (PSD, Sketch, Xd, Ai, etc) or any Reference link.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium">
                        Will I get pixel perfect design?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you will get a pixel perfect and clean design.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium">
                        Do you provide after sale service?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we provide free 30 days VIP support after the sale.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium">
                        Can we communicate on email/contact/ Skype for better communication?
                    </div>
                    <div className="collapse-content">
                        <p>Sorry, this is totally against Fiverr TOS! All communication with the client is to be done in writing via the Fiverr message board and all payment is to be made via Fiverr.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;