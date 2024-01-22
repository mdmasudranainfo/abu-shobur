"use client"
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoMdClose } from 'react-icons/io';
import Mobile_category from './mobile_category';

const Mobile_sub_category = ({ setActive, categoryValue }) => {


     return (
          <div className='  w-full top-0 '>
               <div className=" relative">
                    <div>
                         <div className="    w-full pr-11 ">
                              <div className=" flex  justify-end items-center">

                                   <div className=" cursor-pointer hover:bg-[#F5F5F5]" onClick={() => setActive(false)}>
                                        <IoMdClose size={24} />
                                   </div>
                              </div>
                         </div>

                         <div>
                              <div>
                                   <div className=" flex  flex-col gap-2  py-4">
                                        <h1 className="text-[18px]    primary  font-semibold  ">Filter</h1>

                                        <div className=' relative flex items-start justify-start  h-[1px] bg-[#110e0e47] w-full'>
                                             <div className={`   flex justify-start items-center  py-[1.5px]  rounded-sm bg-black  w-[20%] `}>

                                             </div>
                                        </div>
                                   </div>

                                   <div className=' overflow-y-scroll  h-[75vh] pt-8 '>

                                        <Mobile_category></Mobile_category>
                                   </div>

                              </div>
                         </div>
                    </div>
               </div>




          </div>
     );
};

export default Mobile_sub_category;