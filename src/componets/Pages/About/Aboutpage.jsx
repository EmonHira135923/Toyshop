"use client";
import useTheme from '@/componets/utils/hooks/useTheme';
import React from 'react';

const Aboutpage = () => {
    const {theme} = useTheme();
    const isDark = theme === "dark";
    return (
        <div className={isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
            <h1>About Us page</h1>
        </div>
    );
};

export default Aboutpage;