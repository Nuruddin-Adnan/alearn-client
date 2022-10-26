import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout/Checkout";
import Course from "../../Pages/Course/Course/Course";
import Courses from "../../Pages/Course/Courses/Courses";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Faq from "../../Pages/Faq/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LoginRegistration/Login/Login";
import Registration from "../../Pages/LoginRegistration/Registration/Registration";
import Profile from "../../Pages/Profile/Profile/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://alearn-server.vercel.app/categories')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://alearn-server.vercel.app/categories')
            },
            {
                path: '/course',
                element: <Course></Course>,
                children: [
                    {
                        path: '/course',
                        element: <Courses></Courses>,
                        loader: () => fetch('https://alearn-server.vercel.app/course')
                    },
                    {
                        path: '/course/category/:categoryName',
                        element: <Courses></Courses>,
                        loader: (req, res) => {
                            const category = req.params.categoryName;
                            const categoryCourse = fetch(`https://alearn-server.vercel.app/category/${category}`);
                            return categoryCourse;
                        }
                    }
                ]
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/course-details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => {
                    const id = parseInt(params.id);
                    const course = fetch(`https://alearn-server.vercel.app/course/${id}`);
                    return course
                }
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => {
                    const id = parseInt(params.id);
                    const course = fetch(`https://alearn-server.vercel.app/course/${id}`);
                    return course
                }
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/registration',
                element: <Registration></Registration>,
            },
            {
                path: '/profile',
                element: <Profile></Profile>,
            }
        ]
    }
])