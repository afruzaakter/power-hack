import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
       

      
        <li className='mr-2 font-bold text-primary'><NavLink to="paidTotal">Paid Total: 0</NavLink></li>
      
        <li className='mr-2 font-bold text-primary'><NavLink to="login">Login</NavLink></li>



    </>
    return (
        <div className="navbar p-5 pl-28 fixed top-0">
            <div className="navbar-start">
                <div className="dropdown w-full   ">
                    
                    <div> <h1 className='text-2xl font-bold '>POWER-HACK</h1> </div>
                    <div >
                        <label tabIndex="0" className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div className='flex justify-end'>
                            <div>
                                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box  ">

                                    {menuItem}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-horizontal  p-0">
                    {menuItem}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;