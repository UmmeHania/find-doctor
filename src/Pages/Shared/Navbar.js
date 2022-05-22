import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'

const Navbar = () => {

    const [user] = useAuthState(auth);
    // console.log(user.displayName);

    const logout = () => {
        signOut(auth);
    };


    const menuItems = <>
        <li><NavLink className='hover:bg-accent hover:text-white' to='/'>Home</NavLink></li>
        <li><NavLink className='hover:bg-accent hover:text-white' to='/about'>About</NavLink></li>
        <li><NavLink className='hover:bg-accent hover:text-white' to='appointment'>Appointment</NavLink></li>
        <li><NavLink className='hover:bg-accent hover:text-white' to='/reviews'>Reviews</NavLink></li>
        <li><NavLink className='hover:bg-accent hover:text-white' to='/contactus'>Contact Us</NavLink></li>
        {
            user && <li><NavLink className='hover:bg-accent hover:text-white' to='/dashboard'>Dashboard</NavLink></li>
        }
        <li>
            {user
                ? <button className="btn btn-active btn-ghost" onClick={logout}>Sign Out</button>
                : <NavLink className='hover:bg-accent hover:text-white' to='/login'>
                    Login
                </NavLink>}
        </li>
    </>

    return (
        <div className="image-opacity">
            <div className="navbar bg-base">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content gap-y-2 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-x-2">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" for=" dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Navbar;