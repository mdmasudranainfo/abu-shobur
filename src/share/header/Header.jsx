"use client"

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import CategoryNavbar from './CategoryNavbar';
const Header = () => {
     const [isSticky, setIsSticky] = useState(false);
     // setIsSticky  state 
     useEffect(() => {
          const handleScroll = () => {
               const scrollPosition = window.scrollY;
               setIsSticky(scrollPosition > 100);
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     console.log(isSticky);
     return (
          <div className={` ${isSticky ? " sticky  bg-white top-0 z-50  transition-all  w-full shadow-sm" : ""} `}>
               <Navbar></Navbar>
               <div className=' hidden md:block py-2 bg-white'>
                    <CategoryNavbar></CategoryNavbar>
               </div>

          </div>
     );
};

export default Header;