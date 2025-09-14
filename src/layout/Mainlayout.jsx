import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const Mainlayout = () => {
    return (
        <div>
            <Header/>
            <div className='max-w-7xl mx-auto'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Mainlayout;