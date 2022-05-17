import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="image-opacity">
            <div class="navbar bg-base-200 fixed top-0 px-20">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content gap-y-2 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li><NavLink className='hover:bg-accent hover:text-white' to='/'>Home</NavLink></li>
                            <li><NavLink className='hover:bg-accent hover:text-white' to='/about'>About</NavLink></li>
                            <li><NavLink className='hover:bg-accent hover:text-white' to='appointment'>Appointment</NavLink></li>
                            <li><NavLink className='hover:bg-accent hover:text-white' to='/reviews'>Reviews</NavLink></li>
                            <li><NavLink className='hover:bg-accent hover:text-white' to='/contactus'>Contact Us</NavLink></li>
                            <li><NavLink className='hover:bg-accent hover:text-white' to='/login'>Login</NavLink></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 gap-x-2">
                        <li><NavLink className='hover:bg-accent hover:text-white' to='/'>Home</NavLink></li>
                        <li><NavLink className='hover:bg-accent hover:text-white' to='/about'>About</NavLink></li>
                        <li><NavLink className='hover:bg-accent hover:text-white' to='appointment'>Appointment</NavLink></li>
                        <li><NavLink className='hover:bg-accent hover:text-white' to='/reviews'>Reviews</NavLink></li>
                        <li><NavLink className='hover:bg-accent hover:text-white' to='/contactus'>Contact Us</NavLink></li>
                        <li><NavLink className='hover:bg-accent hover:text-white' to='/login'>Login</NavLink></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;