import Link from 'next/link';
import React from 'react';
import { LuTag } from "react-icons/lu";
import { PiKeyReturnBold } from "react-icons/pi";

import { IoIosStarOutline } from 'react-icons/io';

const Why_onedrob = () => {
     return (
          <div className='container'>
               <div className=' py-20'>
                    <div>
                         <h1 className='text-[18px]  text-color  capitalize  font-medium'>Why ONEDROB?</h1>
                    </div>
                    <div className=' py-5 grid md:grid-cols-2 lg:grid-cols-3 gap-2  md:gap-3 lg:gap-6'>
                         <div className='flex gap- flex-col '>
                              <div className=' py-2  secondary   '>
                                   <LuTag size={22} />
                              </div>
                              <div>
                                   <h4 className='text-[15px] font-medium  primary'>The one that you want? {"We've"} got it.</h4>
                                   <p className='text-[14px] font-normal   text-color'> Shop over 100,000 styles</p>
                              </div>
                              <Link className='text-[14px] mt-1 underline hover:opacity-70 duration-150  font-normal  text-color' href={'/'} >View All</Link>

                         </div>
                         <div className='flex gap- flex-col '>
                              <div className=' py-2  secondary   '>
                                   <IoIosStarOutline  size={22} />
                              </div>
                              <div>
                                   <h4 className='text-[15px] font-medium  primary'>4.7/5 stars and 25,000+ reviews</h4>
                                   <p className='text-[14px] font-normal   text-color'> You know you can trust us</p>
                              </div>
                              <Link className='text-[14px] mt-1 underline hover:opacity-70 duration-150  font-normal  text-color' href={'/'} >Read reviews</Link>

                         </div>
                         <div className='flex gap- flex-col '>
                              <div className=' py-2  secondary   '>
                                   <PiKeyReturnBold size={22} />
                              </div>
                              <div>
                                   <h4 className='text-[15px] font-medium  primary'>Free global returns collection service</h4>
                                   <p className='text-[14px] font-normal   text-color'> Changed your mind? No problem</p>
                              </div>
                              <Link className='text-[14px] mt-1 underline hover:opacity-70 duration-150  font-normal  text-color' href={'/'} >Read more</Link>

                         </div>
                      
                    </div>
               </div>
          </div>
     );
};

export default Why_onedrob;