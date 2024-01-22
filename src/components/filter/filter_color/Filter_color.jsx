"use client"
import { filter_color } from '@/utils/filter/filter_color';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Filter_color = () => {
     const [active, setActive] = useState(false)
     return (
          <div>
               <div>
                    <div>
                         <div>
                              <div onClick={() => setActive(!active)} className=" flex  cursor-pointer justify-between items-center">
                                   <h1 className="text-[16px]    primary font-medium  ">Colors</h1>

                                   <div className=" cursor-pointer" >
                                        {
                                             active ? <IoIosArrowUp size={22} /> : <IoIosArrowDown dOutlineKeyboardArrowDown size={22} />
                                        }

                                   </div>
                              </div>

                              <div>

                                   {/* dropdown menu  */}

                                   <Collapse isOpened={active}>
                                        <div className=' pt-4'>
                                             <div className='  relative '>
                                                  <div className=' relative flex items-start justify-start  h-[1px] bg-[#110e0e47] w-full'>
                                                       <div className={`   flex justify-start items-center  py-[1.5px]  rounded-sm bg-black  w-[20%] `}>

                                                       </div>
                                                  </div>

                                             </div>
                                             <div>
                                                  <div className=' pr-2 mt-4'>
                                                       {
                                                            filter_color?.map((item, index) => <div className='border rounded-md hover:bg-[#F5F5F5] duration-200 cursor-pointer my-2  px-4 py-[12px] border-[#3d3d3d40] ' key={index}>
                                                                 <div className=' flex items-center gap-2'>
                                                                      <div className={` w-[20px] ${item?.color} rounded-full h-[20px] `}></div>
                                                                      <p> {item?.name} </p>
                                                                 </div>
                                                            </div>)
                                                       }
                                                  </div>
                                             </div>
                                        </div>
                                   </Collapse>
                              </div>
                         </div>
                    </div>
               </div >
          </div>
     );
};

export default Filter_color;