"use  client"
import { toggle } from '@/redux/features/categoryToggle/CategoryToggle';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowBack, IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';

const Sub_category = ({ activeSub_value, setActiveSub }) => {
     const dispatch = useDispatch()
     

     return (
          <div className=' w-full'>
               <div className='  absolute  z-50 top-0  bg-white  w-full  py-3'>
                    <div className=' fixed shadow  py-3 px-4   top-0  w-full   bg-white   '>
                         <div className=' flex justify-between items-center'>
                              <div onClick={() => setActiveSub(false)} className=" cursor-pointer hover:bg-[#F5F5F5]">
                                   <IoIosArrowBack size={24} />
                              </div>
                              <div>
                                   <h1 className=' text-[18px] font-medium primary uppercase'>{activeSub_value?.name}</h1>
                              </div>
                              <div>
                                   <div onClick={()=>dispatch(toggle())} className=" cursor-pointer hover:bg-[#F5F5F5]">
                                        <IoMdClose size={24} />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className=' pt-20 px-4'>
                         <div>
                              <div className=" ">
                                   {activeSub_value?.subCategory?.map((item, index) => (
                                        <div key={index}>
                                             <div>
                                                  <h1 className=" text-[18px] font-medium uppercase  primary py-3  tracking-[1.2px]">
                                                       {' '}
                                                       {item?.name}{' '}
                                                  </h1>

                                                  <div className=' w-full'>
                                                       {item?.option?.map((item, index) => (
                                                            <div className=" hover:bg-[#F5F5F5]  flex  w-full items-center cursor-pointer  px-3  duration-200  secondary p-[9px]" key={index}>
                                                                 <Link
                                                                      className=" "
                                                                      href={'/'}
                                                                 >
                                                                      {' '}
                                                                      {item?.name}{' '}
                                                                 </Link>
                                                            </div>
                                                       ))}
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Sub_category;