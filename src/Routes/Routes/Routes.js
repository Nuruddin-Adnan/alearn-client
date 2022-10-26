import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Course from "../../Pages/Course/Course/Course";
import Courses from "../../Pages/Course/Courses/Courses";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Faq from "../../Pages/Faq/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LoginRegistration/Login/Login";
import Registration from "../../Pages/LoginRegistration/Registration/Registration";

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
                path: '/course-details',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/registration',
                element: <Registration></Registration>,
            }
        ]
    }
])