import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import Categories from '../Pages/Categories';
import AuthLayout from '../layout/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <Categories></Categories>,
                loader: ({ params }) =>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <h2>news element</h2>
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <h2>Error</h2>
    }
])
export default router;