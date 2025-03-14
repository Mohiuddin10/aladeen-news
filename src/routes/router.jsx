import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/news",
        element: <h2>news element</h2>
    },
    {
        path: "*",
        element: <h2>Error</h2>
    }
])
export default router;