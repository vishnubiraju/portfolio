import React, { memo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Projects from '../pages/Projects';
import * as ROUTE_PATHS from "../utils/routeConstants";

const AppRoutes = () => {
    const routeConfig = [
        {
            path: ROUTE_PATHS.HOME_PAGE,
            component: Home
        },
        {
            path: ROUTE_PATHS.ABOUT_PAGE,
            component: About
        },
        {
            path: ROUTE_PATHS.CONTACT_PAGE,
            component: Contact
        },
        {
            path: ROUTE_PATHS.PROFILE_PAGE,
            component: Profile
        },
        {
            path: ROUTE_PATHS.PROJECTS_PAGE,
            component: Projects
        }
    ];

    return (
        <Router>
            <Routes>
                {routeConfig.map((route) => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />} // Corrected element usage
                        />
                    );
                })}
            </Routes>
        </Router>
    );
};

export default memo(AppRoutes);
