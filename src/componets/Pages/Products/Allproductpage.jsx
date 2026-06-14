"use client";
import useTheme from '@/componets/utils/hooks/useTheme';
import React from 'react';

const Allproductpage = () => {
    const {theme} = useTheme();
    const isDark = theme === "dark";
    return (
        <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
            <h1 className={`${isDark ? "text-white" : "text-gray-900"}`}>All Products page</h1>
        </div>
    );
};

export default Allproductpage;