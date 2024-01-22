import React from 'react';
import { FaRegCommentAlt, FaRegQuestionCircle } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
const Site_process = () => {
     return (
          <div className=' py-10'>
               <div className=' grid grid-cols-1   md:grid-cols-2 xl:grid-cols-3 justify-center   gap-3  md:gap-5'>
                    <div className='w-full'>
                         <div className=' border rounded-md hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]'>
                              <div className=' flex flex-col gap-3'>
                                   <div>
                                        <MdOutlineShoppingCart size={20} />
                                   </div>

                                   <h1 className='text-[14px] secondary font-normal uppercase'> how to shop  </h1>
                                   <p className='text-[14px] secondary font-normal '>Your guide to shopping and placing orders</p>
                              </div>

                         </div>
                    </div>
                    <div className='w-full'>
                         <div className=' border rounded-md hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]'>
                              <div className=' flex flex-col gap-3'>
                                   <div>
                                        <FaRegQuestionCircle size={20} />

                                   </div>

                                   <h1 className='text-[14px] secondary font-normal uppercase'>FAQS  </h1>
                                   <p className='text-[14px] secondary font-normal '>
                                        Your questions answered</p>
                              </div>

                         </div>
                    </div>
                    <div className='w-full'>
                         <div className=' border rounded-md hover:bg-[#F5F5F5] cursor-pointer  px-4 py-6 border-[#3d3d3d40]'>
                              <div className=' flex flex-col gap-3'>
                                   <div>
                                        <FaRegCommentAlt size={20} />

                                   </div>

                                   <h1 className='text-[14px] secondary font-normal uppercase'> need help </h1>
                                   <p className='text-[14px] secondary font-normal '>
                                        Contact our global Customer Service t</p>
                              </div>

                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Site_process;