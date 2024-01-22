
import React from 'react';
import { PiKeyReturnBold } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdGift } from "react-icons/io";

const Services = () => {
     return (
          <div className="bg-[#F5F5F5] py-8  px-3  w-full my-8">
               <div className=' container'>
                    <div className='  flex  flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12  '>
                         <div className='flex gap-3 flex-col justify-center w-full '>
                              <div className=' text-center  primary   '>
                                   <PiKeyReturnBold className='  primary inline-block ' size={28} />
                              </div>
                              <div className='text-center'>
                                   <h4 className='text-[16px] font-medium  primary'>Free global returns collection services.</h4>
                                   <p className='text-[14px] font-normal pt-1   text-color'>We offer a free returns collection service on all orders worldwide</p>
                              </div>
                         </div>
                         <div className='flex gap-3 flex-col justify-center w-full '>
                              <div className=' text-center  primary   '>
                                   <IoMdGift className='  primary inline-block ' size={28} />
                              </div>
                              <div className='text-center'>
                                   <h4 className='text-[16px] font-medium  primary'>Upgrade your Access rewards</h4>
                                   <p className='text-[14px] font-normal pt-1   text-color'> Every new order takes you one step closer to unlocking exclusive rewards</p>
                              </div>
                         </div>
                         <div className='flex gap-3 flex-col justify-center w-full '>
                              <div className=' text-center  primary   '>
                                   <TbTruckDelivery className='  primary inline-block ' size={28} />
                              </div>
                              <div className='text-center'>
                                   <h4 className='text-[16px] font-medium  primary'>Fast delivery</h4>
                                   <p className='text-[14px] font-normal pt-1   text-color'> To your door in no time. Explore F90, Same Day delivery and Express delivery.</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Services;