"use client"
import { toggle } from '@/redux/features/filterToggle/FilterToggle';
import { quickSort } from '@/utils/filter/quickSort';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch } from 'react-redux';
const FilterTitle = () => {
     const [active, setActive] = useState(false)
     const [activeValue, setActiveValue] = useState("");
     const dispatch = useDispatch();

     return (
          <div className=' flex justify-center md:justify-between items-start gap-2 ] relative'>
               <div onClick={() => dispatch(toggle())} className='   inline-block border rounded-md hover:bg-[#F5F5F5] cursor-pointer  px-4 py-2 border-[#3d3d3d40]'>
                    <div  className=' flex justify-center items-center gap-3'>
                         <h2 className=' font-medium'>All Filter</h2>
                         <IoFilterOutline size={24} />
                    </div>
               </div>
               <div>
                    <div className=' relative hidden     md:block '>
                         <div className={`  ${active ? " bg-[#fff]   shadow-md " : " "} absolute w-[350px]  top-0  right-0 bg-white z-20  py-2 text-end `}>
                              <div className=' flex justify-end'>
                                   <button onClick={() => setActive(!active)} className='  px-4 duration-100  rounded-md flex items-center gap-2'> <span className='text-[16px] font-medium  primary '> {activeValue ? activeValue : "Sort by"} </span>
                                        {
                                             active ? <MdOutlineKeyboardArrowUp size={22} /> : <MdOutlineKeyboardArrowDown size={22} />
                                        }
                                   </button>
                              </div>

                              <Collapse isOpened={active}>

                                   {active ? <div className='  py-3'>
                                        {
                                             quickSort?.map((item, index) => <div onClick={() => { setActiveValue(item?.name), setActive(false) }} className=' secondary py-2 cursor-pointer duration-300 bg-[#fff] px-8 hover:bg-[#F5F5F5]' key={index}>  <p>{item?.name}</p> </div>)
                                        }
                                   </div> : null}

                              </Collapse>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default FilterTitle;