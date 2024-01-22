import Link from 'next/link';
import React from 'react';
import { CiCircleQuestion } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { LuMail } from 'react-icons/lu';

const Need_help = () => {
     return (
          <div className="bg-[#F5F5F5] py-14 w-full px-3 my-8">
               <div className=' container'>
                    <div className=' grid md:grid-cols-2 gap-5    md:gap-7'>
                         <div>
                              <div className='   space-y-2'>
                                   <h1 className='text-[18px] font-normal  primary'>Need help?</h1>
                                   <p className='text-[14px] font-normal text-color'>Contact our global Customer Service team, you can reach us by phone or email. Alternatively, you may find the answer in our <Link  href={"/"} className=' underline  duration-150 hover:text-[#00000084]'> Frequently Asked Questions page.</Link> </p>
                              </div>
                         </div>
                         <div className=' flex gap-5 flex-col sm:flex-row  md:gap-3  lg:gap-7 items-start'>
                              <div className=' w-full  space-y-2 '>
                                   <div className='  flex text-center gap-2'>
                                        <IoCallOutline className='' size={20} />
                                        <span className='text-[15px] font-medium '>Call us</span>
                                   </div>
                                   <p className='text-[14px]  font-medium  cursor-pointer hover:text-[#00000084]  primary '>+1 646 791 3768</p>
                                   <p className='text-[14px] font-normal text-color'>Monday to Friday: 8am to 9pm EST</p>

                              </div>
                              <div className=' w-full '>
                                   <div className='space-y-2 '>
                                        <div className='  flex text-center gap-2'>
                                             <LuMail className='' size={20} /> <p className='text-[15px] font-medium '>Email</p>
                                        </div>
                                        <div>
                                             <Link href={'/email'} className='text-[14px] font-normal text-color'>Click here to send us an email</Link>
                                        </div>
                                   </div>
                              </div>
                              <div className=' w-full '>
                                   <div className='space-y-2 '>
                                        <div className='  flex text-center gap-2'>
                                             <CiCircleQuestion size={20} />
                                             <span className='text-[15px] font-medium '>FAQs</span>
                                        </div>
                                        <p className='text-[14px] font-normal text-color'>Find the answers you need in our <Link href={'/'}>FAQs</Link> </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Need_help;