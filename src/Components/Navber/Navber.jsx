import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/Images/logo.png'
import { IoHome } from 'react-icons/io5';
import { IoIosTime } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';

const Navber = () => {

    const links = <>
        <li><NavLink to={"/"} className={({ isActive }) => ` mr-2 font-semibold ${isActive ? "bg-green-700 text-white " : ""}`} ><IoHome /> Home</NavLink></li>
        <li><NavLink to={"/TimeLine"} className={({ isActive }) => `mr-2 font-semibold ${isActive ? "bg-green-700 text-white" : ""}`}><IoIosTime /> Timeline</NavLink></li>
        <li><NavLink to={"/States"} className={({ isActive }) => `mr-2 font-semibold  ${isActive ? "bg-green-700 text-white" : ""}`}><ImStatsDots /> States</NavLink></li>
    </>
    return (
        <nav className='bg-base-100 shadow-sm'>
            <div className="navbar  max-w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links};
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links};
                    </ul>
                </div>
                
            </div>
        </nav>
    );
};

export default Navber;