import React from 'react';
import { NavLink } from 'react-router';

const Navber = () => {

    const links = <>
        <li><NavLink to={"/"} className={({isActive})=> ` mr-2 font-semibold ${isActive? "bg-green-700 text-white ": ""}`} >Home</NavLink></li>
        <li><NavLink to={"/TimeLine"} className={({isActive}) => `mr-2 font-semibold ${isActive ? "bg-green-700 text-white" : ""}`}>Timeline</NavLink></li>
        <li><NavLink to={"/States"} className={({isActive}) => `mr-2 font-semibold  ${isActive ? "bg-green-700 text-white" : ""}`}>States</NavLink></li>
    </>
    return (
        <nav className='bg-base-100 shadow-sm'>
            <div className="navbar  max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links};
                        </ul>
                    </div>
                    <h2 className='text-xl'><span className='font-bold'>Keen</span><span className='font-semibold'>Keeper</span></h2>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links};
                    </ul>
                </div>
                
            </div>
        </nav>
    );
};

export default Navber;