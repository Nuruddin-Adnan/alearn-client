import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Course from "../../Pages/Course/Course/Course";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LoginRegistration/Login/Login";

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
                loader: () => fetch('https://alearn-server.vercel.app/course')
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            }
        ]
    }
])