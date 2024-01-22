"use client"
import { mainCategory } from '@/utils/category';
import React, { useState } from 'react';
import { FaParachuteBox } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import { TbWorld } from "react-icons/tb";
import bangladesh from "../../../public/images/category/bagnladesh.jpg"
import Image from 'next/image';
import Category_modal_single from './category_modal_single';
import Sub_category from './Sub_category';
import { Collapse } from 'react-collapse';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '@/redux/features/categoryToggle/CategoryToggle';

const Category_modal = () => {
     const [active, setActive] = useState("women");
     const [activeSub, setActiveSub] = useState(false)
     const [activeSub_value, setActiveSub_value] = useState([])
     const filterCategory = mainCategory.filter(item => item?.name == active);
     const dispatch = useDispatch();
     const { category } = useSelector((state) => state?.Category_toggle)

     return (
          <div className={` ${category ? " w-full block " : " w-[0px]  hidden"} fixed z-50 top-0 duration-100 `}>
               {
                    activeSub ? <Collapse isOpened={activeSub}>  <Sub_category setActiveSub={setActiveSub} activeSub_value={activeSub_value}></Sub_category></Collapse> : <div className=' bg-white absolute top-0 left-0 right-0 z-50 w-full h-auto '>
                         <div className='   fixed top-0 pb-3   py-7 px-3  pt-8  pr-6  w-full bg-white   '>
                              <div className=' flex justify-between items-center'>
                                   <div className=" cursor-pointer hover:bg-[#F5F5F5]">
                                        <FaParachuteBox size={24} />
                                   </div>
                                   <div>
                                        <div onClick={() => dispatch(toggle())} className=" cursor-pointer hover:bg-[#F5F5F5]">
                                             <IoMdClose size={24} />
                                        </div>
                                   </div>
                              </div>

                              <div className=' mt-8'>

                                   <div className=' border-b border-[#00000021] flex items-center gap-3 md:gap-6 text-[16px] text-color'>
                                        <div onClick={() => setActive("women")} className={` ${active == "women" ? " border-b-[2px]  border-[#000]" : ""} duration-200 pb-1 cursor-pointer `}>Women</div>
                                        <div onClick={() => setActive("men")} className={`  ${active == "men" ? " border-b-[2px] border-[#000]" : ""}  pb-1 duration-200 cursor-pointer `}>Men</div>
                                        <div onClick={() => setActive("kids")} className={` ${active == "kids" ? " border-b-[2px] border-[#000]" : ""} pb-1 duration-200  cursor-pointer `}>Kids</div>
                                   </div>

                              </div>
                         </div>
                         {/* category mapping  */}
                         <div className=' max-h-screen  overflow-y-scroll'>
                              <div className='  pt-32  w-full '>
                                   <div>
                                        {filterCategory?.[0]?.category?.map((item, index) => <Category_modal_single setActiveSub_value={setActiveSub_value} setActiveSub={setActiveSub} item={item} key={index}></Category_modal_single>)
                                        }
                                   </div>
                              </div>
                              <div className=' py-2 '>
                                   {/* My Account section  */}
                                   <h1 className=' px-3  text-[22px] font-medium secondary'>My Account</h1>
                                   <div className='hover:bg-[#F5F5F5] my-2 flex items-center gap-2 cursor-pointer  px-3  duration-200  secondary p-[10px]'>
                                        <div>
                                             <CiUser size={24} />
                                        </div>
                                        <h1 className='text-[14px] font-normal capitalize'>Shamim Hossain</h1>
                                   </div>

                                   <div className='px-3'>
                                        <div className=' border flex items-center justify-center gap-2 rounded-md hover:bg-[#F5F5F5] cursor-pointer  px-4 py-[10px] border-[#3d3d3d40]'>
                                             <button>Sign out</button>
                                        </div>
                                   </div>
                                   {/* Language and region  */}
                                   <div>
                                        <h1 className=' px-3  text-[22px] font-medium secondary'>Language and region</h1>
                                        <div className='hover:bg-[#F5F5F5] my-4 flex items-start justify-start gap-2 cursor-pointer  px-3  duration-200  secondary p-[8px] '>
                                             <TbWorld size={24}></TbWorld>
                                             <div>
                                                  <h1 className=' text-[14px] font-medium'> Bangla (Bangla)</h1>
                                                  <span className=' text-[14px] font-normal'>Language</span>
                                             </div>
                                        </div>
                                        <div className='hover:bg-[#F5F5F5] my-4 flex items-start justify-start gap-2 cursor-pointer  px-3  duration-200  secondary p-[8px] '>
                                             <Image className=' w-[24px] h-[24px] rounded-full  object-fill' width={24} height={24} src={bangladesh} alt='bangladesh'></Image>
                                             <div>
                                                  <h1 className=' text-[14px] font-medium'> Bangla (USD$)</h1>
                                                  <span className=' text-[14px] font-normal'>Region</span>
                                             </div>
                                        </div>
                                        <div className='px-3  '>
                                             <p className=' text-[12px] font-normal text-color'>You are currently shipping to Bangladesh and your order will be billed in USD $.</p>
                                        </div>

                                   </div>

                              </div>
                         </div>
                    </div>

               }
          </div>
     );
};

export default Category_modal;