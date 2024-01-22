import Link from 'next/link';
import React from 'react';
import { LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";

const Contact_us = () => {
     return (
          <div className='container'>
               <div className=' py-14 px-1'>
                    <div>
                         <h1 className='text-[18px]  text-color  capitalize  font-medium'>Contact us</h1>
                    </div>

                    <div className='  grid md:grid-cols-2  gap-4 mt-5'>
                         <div className=' border border-[#e6e6e6]  px-4   py-6'>
                              <div className="  space-y-2 ">
                                   <div>
                                        <LuMail className='' size={24} />
                                   </div>
                                   <h3 className='text-[16px] font-medium   text-color'>EMAIL US</h3>
                                   <p className='text-[14px] font-normal'>Get in touch by email</p>
                              </div>
                              <p className=' pt-2 hover:underline text-color '>customerservice@onedrob.com</p>
                         </div>
                         <div className=' border border-[#e6e6e6]  px-4   py-6'>
                              <div className="  space-y-2 ">
                                   <div>
                                        <IoCallOutline className='' size={24} />
                                   </div>
                                   <h3 className='text-[16px] font-medium   text-color'>ORDER BY PHONE</h3>
                                   <p className='text-[14px] font-normal'>Available Monday to Friday, 09:00 – 18:00 GMT</p>
                              </div>
                              <p className=' pt-2 hover:underline text-color '>+1 646 791 3768</p>
                         </div>
                    </div>

               </div>

          </div>
     );
};

export default Contact_us;