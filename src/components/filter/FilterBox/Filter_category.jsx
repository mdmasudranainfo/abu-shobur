"use client"

import { filterCategory } from '@/utils/filter/filter_category';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Filter_category_sub from './filter_category_sub';


const Filter_category = () => {
     const [active, setActive] = useState(false)

     return (
          <div>
               <div>
                    <div>
                         <div onClick={() => setActive(!active)} className=" flex  cursor-pointer justify-between items-center">
                              <h1 className="text-[16px]    primary font-medium  ">Category</h1>

                              <div className=" cursor-pointer" >
                                   {
                                        active ? <IoIosArrowUp size={22} /> : <IoIosArrowDown dOutlineKeyboardArrowDown size={22} />
                                   }

                              </div>
                         </div>

                         <div>

                              <Collapse isOpened={active}>
                                   <div className=' pt-4'>
                                        <div className='  relative '>
                                             <div className=' relative flex items-start justify-start  h-[1px] bg-[#110e0e47] w-full'>
                                                  <div className={`   flex justify-start items-center  py-[1.5px]  rounded-sm bg-black  w-[20%] `}>

                                                  </div>
                                             </div>

                                        </div>
                                        <div>
                                             {
                                                  active ? < div className='py-2'>
                                                       {
                                                            filterCategory?.map((item, index) => <Filter_category_sub item={item} key={index} />)
                                                       }
                                                  </div> : null
                                             }
                                        </div>
                                   </div>
                              </Collapse>
                         </div>
                    </div>
               </div>
          </div >
     );
};

export default Filter_category;