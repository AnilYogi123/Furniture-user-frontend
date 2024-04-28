import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Meubel House_Logos-05.png';
import userIcon from '../assets/mdi_account-alert-outline.png';
import searchIcon from '../assets/akar-icons_search.png';
import wishlistIcon from '../assets/akar-icons_heart.png';
import cartIcon from '../assets/ant-design_shopping-cart-outlined.png';
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const navigate = useNavigate()

    return (
        <div className='relative'>
            <div className='nav w-full bg-white-smoke-500 flex h-16 p-4 items-center justify-between'>
                <div onClick={()=>navigate("/")} className="logo cursor-pointer flex items-center">
                    <img src={logo} alt="Furniro Logo" className='w-8' />
                    <div className='font-bold text-2xl'>Furniro</div>
                </div>
                <div className="nav-links">
                    <ul className='flex gap-8 text-base font-medium sm:hidden md:hidden'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/productcomparision'>Compare</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="icons flex gap-8 sm:hidden md:hidden">
                    {user?.data?.username?<div className='flex items-center gap-2'><FaRegUser />{user?.data?.username} </div>: <Link to='/login'><img src={userIcon} alt="User Icon" className='w-6' /></Link>}
                    
                    {/* <img src={searchIcon} alt="Search Icon" className='w-6' /> */}
                    {/* <img src={wishlistIcon} alt="Wishlist Icon" className='w-6' /> */}
                    <Link to='/cart'><img src={cartIcon} alt="Cart Icon" className='w-6' /></Link>
                </div>
                <div className="hidden sm:block md:block sm:flex items-center">
                    <button className="mobile-menu-btn focus:outline-none" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className='absolute flex flex-col gap-4 z-10 top-12 right-4 bg-zinc-50 w-52 p-4 rounded'>
                    <ul className='flex flex-col gap-4 text-base font-medium'>
                        <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
                        <li><Link to='/shop' onClick={toggleMenu}>Shop</Link></li>
                        <li><Link to='/about' onClick={toggleMenu}>About</Link></li>
                        <li><Link to='/contact' onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                    <div className="icons flex gap-4">
                        <Link to='/user'><img src={userIcon} alt="User Icon" className='sm:w-6 sm:h-6 md:w-6 md:h-6' /></Link>
                        <img src={searchIcon} alt="Search Icon" className='sm:w-6 sm:h-6 md:w-6 md:h-6' />
                        <img src={wishlistIcon} alt="Wishlist Icon" className='sm:w-6 sm:h-6 md:w-6 md:h-6' />
                        <Link to='/cart'><img src={cartIcon} alt="Cart Icon" className='sm:w-6 sm:h-6 md:w-6 md:h-6' /></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
