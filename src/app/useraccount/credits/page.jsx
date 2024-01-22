"use client"

import CommonTitle from '@/components/dashboard/CommonTitle';
import MyAccount from '@/components/dashboard/MyAccount';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoIosArrowUp } from 'react-icons/io';

const Page = () => {
     const [active, setActive] = useState(false)
     return (
          <div>
                <MyAccount />
               <CommonTitle text={"Account credit"}></CommonTitle>

               <div className=' py-2'>
                    {/* taka  */}
                    <div>
                         <h1 className=' text-[32px] font-bold primary'>$0.00</h1>
                         <p className='text-[17px] font-medium secondary'>Total credit</p>
                    </div>
                    <div className=' py-3'>
                         <h2 className='text-[18px] font-normal primary py-1'>Nothing to see here, yet</h2>
                         <p className='  text-[14px] font-normal text-color '>Your available credit and history will show here</p>
                    </div>
                    <h1 className='text-[20px] text-color py-2 font-medium '>Have a question?</h1>

                    <div className=' py-4'>

                         <div className='  relative    bg-white  py-2 border-b border-[#25252541] '>
                              <div className='w-full    rounded   '>
                                   <div onClick={() => setActive(!active)} className=' flex justify-between items-center gap-3 cursor-pointer'>
                                        <h1> FQAs </h1>
                                        <div>
                                             <IoIosArrowUp
                                                  className={`${active ? '' : "rotate-180"}   text-colo duration-500`}
                                                  size={20}
                                             />
                                        </div>
                                   </div>
                                   <Collapse isOpened={active}>

                                        <div className=' pb-1 pt-3'>
                                             <h1 className='text-[16px] font-medium primary'>What is credit?</h1>
                                             <p className='text-[14px] font-normal py-1
                                              text-color'>Credit is an amount stored in your account that can be put towards ONEDROB purchases.</p>
                                        </div>
                                        <div className=' py-1'>
                                             <h1 className='text-[16px] font-medium primary'>How do I get credit?</h1>
                                             <p className='text-[14px] font-normal py-1
                                              text-color'>There are many ways to get credit, from selling through Second Life and Thrift+ donations, to campaigns and returns.</p>
                                        </div>
                                        <div className=' py-1'>
                                             <h1 className='text-[16px] font-medium primary'>How do I use credit?</h1>
                                             <p className='text-[14px] font-normal py-1
                                              text-color'>Available credit is automatically applied at checkout the next time you place an order.</p>
                                        </div>
                                        <div className=' py-1'>
                                             <h1 className='text-[16px] font-medium primary'>How do I check my credit balance?</h1>
                                             <p className='text-[14px] font-normal py-1
                                              text-color'>View your credit balance and history by going to the Account Credit page in your account.</p>
                                        </div>
                                        <div className=' py-1'>
                                             <h1 className='text-[16px] font-medium primary'>Why has my credit expired?</h1>
                                             <p className='text-[14px] font-normal py-1
                                              text-color'>
                                                  Sometimes, if credit is earned from a campaign it is only valid for a specified time. Check the terms and conditions so you don t miss out.
                                                  .</p>
                                        </div>
                                        <div className=' py-1'>
                                             <h1 className='text-[16px] font-medium primary'>What is credit?</h1>
                                             <p className='text-[14px] font-normal py-1
                                              text-color'>Credit is an amount stored in your account that can be put towards ONEDROB purchases.</p>
                                        </div> 

                                   </Collapse>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Page;