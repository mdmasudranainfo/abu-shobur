"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { TbWorld } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { IoIosCheckmark } from "react-icons/io"
import { FaBars, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Collapse } from 'react-collapse';
import { useDispatch } from 'react-redux';
import { toggle } from '@/redux/features/categoryToggle/CategoryToggle';
import { CiSearch } from 'react-icons/ci';
import { toggle_search } from '@/redux/features/searchToggle/SearchToggle';
import { account_toggle } from '@/redux/features/SingInSignOutToggle/SignInSingOutToggle';
import NavbarModal from './NavbarModal';
import { useRouter } from 'next/navigation';

const Navbar = () => {
     const [selectOption, setSelection] = useState("women");
     const [activeSelect, setActiveSelect] = useState(false);
     const [isOpen, setIsOpen] = useState(false);
     const dispatch = useDispatch();
     const router = useRouter();
     const user = false;
     return (
          <div className=' bg-white py-2 w-full' >
               <div className='container'>
                    <div className='  flex justify-between items-center gap-5   w-full '>
                         <div className=' relative'>
                              <div className='  hidden md:flex items-center gap-2'>
                                   <div className={`hover:bg-[#F5F5F5]  duration-200  secondary p-[8px] rounded-l-[8px]`}>
                                        <Link href={"/"}>Women</Link>
                                   </div>
                                   <div className='hover:bg-[#F5F5F5]   duration-200  secondary p-[8px] '>
                                        <Link href={"/"}>Men</Link>
                                   </div>
                                   <div className='hover:bg-[#F5F5F5]    duration-200 secondary p-[8px] rounded-r-[8px]'>
                                        <Link href={"/"}>kids</Link>
                                   </div>
                              </div>

                              <div className='  md:hidden px-[2px]' onClick={() => setActiveSelect(!activeSelect)}>
                                   <div className=' flex items-center justify-center gap-4'>
                                        <div onClick={() => dispatch(toggle())}>
                                             <FaBars size={21} />
                                        </div>
                                        <div onClick={() => dispatch(toggle_search())}>
                                             <CiSearch size={21} />
                                        </div>
                                   </div>
                              </div>
                              <div className=' hidden absolute top-11'>
                                   <Collapse isOpened={activeSelect}>
                                        {
                                             activeSelect ? <div className='  top-2 bg-white py-[6px] rounded-[5px] w-[150px] shadow border-[#2323239d] '>

                                                  <Link href={"/"} onClick={() => { setSelection("women"), setActiveSelect(false) }} className='flex justify-between hover:bg-[#F5F5F5] p-2 items-center gap-2'>
                                                       <span className='text-[14px] capitalize font-normal' >Women</span>

                                                       {
                                                            selectOption == "women" ? <IoIosCheckmark size={18} /> : null
                                                       }

                                                  </Link>
                                                  <Link href={"/"} onClick={() => { setSelection("man"), setActiveSelect(false) }} className='flex justify-between hover:bg-[#F5F5F5] capitalize p-2 items-center gap-2'>
                                                       <span className='text-[14px] font-normal' >Man</span>
                                                       {
                                                            selectOption == "man" ? <IoIosCheckmark size={18} /> : null
                                                       }
                                                  </Link>
                                                  <Link href={"/"} onClick={() => { setSelection("kids"), setActiveSelect(false) }} className='flex justify-between  capitalize  hover:bg-[#F5F5F5] p-2 items-center gap-2'>
                                                       <span className='text-[14px] font-normal' >Kids</span>
                                                       {
                                                            selectOption == "kids" ? <IoIosCheckmark size={18} /> : null
                                                       }
                                                  </Link>
                                             </div> : null
                                        }


                                   </Collapse>
                              </div>
                         </div>
                         <div>
                              <Link href={'/'} className=' uppercase text-[20px] md:text-[32px]    tracking-[2.5px]   font-extrabold'>Onedrob</Link>
                         </div>
                         <div className=' flex items-center gap-2 '>
                              <div className=' hidden md:block hover:bg-[#F5F5F5] p-[10px] cursor-pointer   duration-200 secondary rounded-[8px]'>
                                   <TbWorld className={"text-[18px] md:text-[24]"} />
                              </div>
                              {
                                   user ? <div onClick={() => setIsOpen(!isOpen)} className=' hidden md:flex items-center gap-3 hover:bg-[#F5F5F5] p-[10px] cursor-pointer   duration-200 secondary rounded-[8px]'>
                                        <FiUser className={"text-[18px] md:text-[24]"} />
                                        <h1 className='primary text-[15px] font-medium'>Shamim h...</h1>
                                   </div> : <div onClick={() => dispatch(account_toggle())} className=' hidden md:block hover:bg-[#F5F5F5] p-[10px] cursor-pointer   duration-200 secondary rounded-[8px]'>
                                        <FiUser className={"text-[18px] md:text-[24]"} />
                                   </div>
                              }
                              <NavbarModal setIsOpen={setIsOpen} isOpen={isOpen}></NavbarModal>

                              <div onClick={() => router.push("/wishlist")} className='hover:bg-[#F5F5F5] p-[10px] relative cursor-pointer  duration-200  secondary rounded-[8px]'>
                                   <FaRegHeart />
                                   <div className=' top-5 absolute text-[11px] font-normal text-white right-1  primary_bg rounded-full flex justify-center items-center  h-[15px  ] w-[15px]'>
                                        5
                                   </div>
                              </div>
                              <div onClick={() => router.push("/checkout/basket")} className='hover:bg-[#F5F5F5] relative p-[10px] cursor-pointer   duration-200 secondary rounded-[8px]'>
                                   <HiOutlineShoppingBag className={"text-[18px] md:text-[24]"} />
                                   <div className=' top-5 absolute text-[11px] font-normal text-white right-1  primary_bg rounded-full flex justify-center items-center  h-[15px  ] w-[15px]'>
                                        2
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Navbar;