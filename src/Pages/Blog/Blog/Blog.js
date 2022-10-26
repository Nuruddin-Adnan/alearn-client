import React from 'react';

const Blog = () => {
    return (
        <div className='container max-w-3xl mx-auto md:my-10 my-5 px-5'>
            <div className="card bg-primary text-primary-content mb-5">
                <div className="card-body">
                    <h2 className="card-title text-yellow-300 border-b">#01 what is cors?</h2>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </div>
            <div className="card bg-primary text-primary-content mb-5">
                <div className="card-body">
                    <h2 className="card-title text-yellow-300 border-b">#02 Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.</p>
                    <br />
                    <h3 className='text-xl'>Other authentication system</h3>
                    <ul className='list-disc'>
                        <li>JWT Authentication in React - Permify</li>
                        <li>Frontegg</li>
                        <li>Google Oauth</li>
                        <li>Github</li>
                        <li>Microsoft Authentication</li>
                        <li>Etc..</li>
                    </ul>
                </div>
            </div>
            <div className="card bg-primary text-primary-content mb-5">
                <div className="card-body">
                    <h2 className="card-title text-yellow-300 border-b">#03  How does the private route work?</h2>
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
            </div>
            <div className="card bg-primary text-primary-content mb-5">
                <div className="card-body">
                    <h2 className="card-title text-yellow-300 border-b">#04 What is Node? How does Node work?</h2>
                    <h3 className='text-xl'>What is Node?</h3>
                    <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.</p>
                    <br />
                    <h3 className='text-xl'>How does Node work?</h3>
                    <p>Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests. Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. Node JS Web Server internally has a Component, known as “Event Loop”</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;