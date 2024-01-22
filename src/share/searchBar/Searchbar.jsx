"use client"
import { toggle_search } from '@/redux/features/searchToggle/SearchToggle';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
const SearchBar = () => {
     const [active, setActive] = useState("women");
     const data = [1, 2, 4, 5, 6, 7, 8, 9, 12, 53, 54, 45, 65];
     const dispatch = useDispatch();
     const { SearchBar } = useSelector((state) => state.Search_toggle);
     return (
          <div>
               <div className={` ${SearchBar ? " fixed " : " relative hidden "} bg-[#00000057] w-full   h-screen z-50  top-0 bottom-0 left-0   duration-500  `}>
                    <div className='  bg-white p-4 relative'>
                         <div onClick={() => dispatch(toggle_search())} className="   absolute  right-4 top-5 cursor-pointer hover:bg-[#F5F5F5]" >
                              <IoMdClose size={24} />
                         </div>
                         <div className=' max-w-[653px] mx-auto  '>
                              <div>
                                   <div className=' pt-3'>
                                        <h1 className=' text-center uppercase text-[20px] md:text-[32px]    tracking-[2.5px]   font-extrabold'>Onedrob</h1>
                                   </div>
                                   <div className='mt-10 '>
                                        <div className=" border-[1.5px] border-[#3a3a3a]  rounded-[5px] flex items-center    p-[6px] md:p-[10px] bg-white z-50 justify-start gap-2">
                                             <CiSearch className=" text-color opacity-90" size={27} />
                                             <input
                                                  type="text"
                                                  placeholder="Search"
                                                  className=" w-full   text-[14px] font-normal border-none outline-0 r  "
                                             />
                                        </div>

                                   </div>

                                   <div className=' mt-8'>

                                        <div className=' border-b border-[#00000021] flex items-center gap-3 md:gap-6 text-[16px] text-color'>
                                             <div onClick={() => setActive("women")} className={` ${active == "women" ? " border-b-[2px]  border-[#000]" : ""} duration-200 pb-1 cursor-pointer `}>Women</div>
                                             <div onClick={() => setActive("men")} className={`  ${active == "men" ? " border-b-[2px] border-[#000]" : ""}  pb-1 duration-200 cursor-pointer `}>Men</div>
                                             <div onClick={() => setActive("kids")} className={` ${active == "kids" ? " border-b-[2px] border-[#000]" : ""} pb-1 duration-200  cursor-pointer `}>Kids</div>
                                        </div>

                                   </div>

                                   <div className='  py'>
                                        <div className=' max-h-[400px]  overflow-y-scroll pt-6'>

                                             {
                                                  data ? <div>
                                                       {data?.map((item, index) => <div className='   py-[3px]' key={index}>
                                                            <Link className='text-[16px] font-normal text-color ' href={'/'}> Black Jackets </Link>
                                                       </div>)
                                                       }
                                                  </div>

                                                       : <> Your Search not Found</>
                                             }

                                        </div>
                                   </div>

                              </div>
                         </div>

                    </div>
               </div>
          </div >
     );
};

export default SearchBar;