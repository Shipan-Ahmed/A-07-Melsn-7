import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomePage from '../Pages/Homepages/HomePage';
import MainLayout from '../Layouts/MainLayout';
import TimeLine from '../Pages/TimeLine/TimeLine';
import States from '../Pages/States/States';
import Error from '../Components/Error';

const Root = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/TimeLine",
                Component: TimeLine
            },
            {
                path: "/States",
                Component: States
            },
            {
                path: "*",
                Component: Error
            }

        ]
    }
])

export default Root;