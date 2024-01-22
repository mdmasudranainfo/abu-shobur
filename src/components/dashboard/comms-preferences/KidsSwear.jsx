"use client"
import { brands } from '@/utils/brand/brand';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const KidsSwear = () => {
     const SearchLetter = ['123', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
     const categories = ["Accessories", "Activewear", "Bags", "Clothing", "Demi-Fine Jewelry", "Fine Jewelry",
          "Homeware",
          "Jewelry",
          "Lingerie & Nightwear",
          "Pre-Owned"
     ]
     const [selectLetter, setSelectLetter] = useState(null);
     const [selectCategories, setSelectCategories] = useState(null);
     const [selectBrand, setSelectBrand] = useState([]);

     const categoryData = [
          {
               category: [
                    "Accessories",
                    "shop"
               ]
          },
          {
               category: [
                    "Lingerie",
                    "Jewelry"
               ]
          },
          {
               category: [
                    "Pre-Owned",
                    "bran"
               ]
          },
     ]

     return (
          <div className=' py-2'>

               {/* select favorite brands  */}
               <div>
                    <div className='py-4'>
                         <p className='text-[14px] text-color font-normal'>Your favorite brands</p>
                    </div>
                    <div className=' grid md:grid-cols-2 gap-5'>
                         <div>
                              <div className=' relative  my-2 border  border-[#00000039] '>
                                   <input className='   w-full    outline-0   border-[#0000003b] focus:border-[#000]  focus:border-b     py-[6px] px-10 ' type="search" placeholder='Search' name="" id="" />
                                   <CiSearch className=' absolute top-[6px] left-1' size={24} />
                              </div>
                              {/* select key word  */}
                              <div className=' flex items-center gap-3 flex-wrap py-2'>
                                   {
                                        SearchLetter?.map((item, index) => <span onClick={() => setSelectLetter(item)} className={`${selectLetter == item ? " opacity-100  border-b border-[#000] text-black " : "opacity-65"} text-[14px] cursor-pointer font-medium  `} key={index}> {item} </span>)
                                   }
                              </div>
                              <div className=' max-h-[250px] overflow-y-scroll py-4'>
                                   <div className=' grid md:grid-cols-2 gap-3'>
                                        {
                                             brands?.map((item, index) => <div onClick={() => { setSelectBrand(item) }} className=' w-full' key={index}>
                                                  <label className=' flex   items-center gap-2 ' htmlFor="">
                                                       <p className=' bg-[#F5F5F5] h-[15px] w-[15px] border border-[#c4c3c3]  flex items-center justify-center'>   {selectBrand == item ? <span className='bg-[#000] h-[7px] w-[7px] block'></span> : null}  </p>
                                                       <p className='text-[13px] text-color'>{item}</p>
                                                  </label>
                                             </div>)
                                        }
                                   </div>
                              </div>

                         </div>
                         <div className='  relative min-h-[150px] border border-dotted rounded-md p-2 w-full'>
                              {/* show select  brand  */}
                              <div className=' inline-block m-2'>
                                   <div className=' flex items-center gap-1  hover:border-l hover:border-t hover:border-[#0000007b]  duration-300 rounded bg-[#f5f5f5] p-2  '> <p className='text-[14px] font-normal'>Jewelry</p>
                                        <p className='  cursor-pointer text:[#3e3d3d3b] '><IoClose size={20} /> </p>
                                   </div>
                              </div>
                              <div className=' inline-block m-2'>
                                   <div className=' flex items-center gap-1  hover:border-l hover:border-t hover:border-[#0000007b]  duration-300 rounded bg-[#f5f5f5] p-2  '> <p className='text-[14px] font-normal'>Homeware</p>
                                        <p className='  cursor-pointer text:[#3e3d3d3b] '><IoClose size={20} /> </p>
                                   </div>
                              </div>
                              <div className=' inline-block m-2'>
                                   <div className=' flex items-center gap-1  hover:border-l hover:border-t hover:border-[#0000007b]  duration-300 rounded bg-[#f5f5f5] p-2  '> <p className='text-[14px] font-normal'>Lingerie</p>
                                        <p className='  cursor-pointer text:[#3e3d3d3b] '><IoClose size={20} /> </p>
                                   </div>
                              </div>
                              <div className=' absolute   bottom-1 right-1 p-3  '>
                                   <p className='text-[14px]  font-medium secondary'> All Remove </p>

                              </div>
                         </div>
                    </div>
               </div>
               {/* select favorite category  */}

               <div className=' pt-12'>
                    <div className=' py-4'>
                         <p className='text-[14px] text-color font-normal'>Your favorite categories</p>
                    </div>
                    <div className=' grid md:grid-cols-2 gap-5'>
                         <div>
                              <div className=' relative  my-2 border  border-[#00000039] '>
                                   <input className='   w-full    outline-0   border-[#0000003b] focus:border-[#000]  focus:border-b     py-[6px] px-10 ' type="search" placeholder='Search' name="" id="" />
                                   <CiSearch className=' absolute top-[6px] left-1' size={24} />
                              </div>
                              {/* select key word  */}
                              <div className=' flex items-center gap-2 flex-wrap py-2'>
                                   {
                                        categories?.map((item, index) => <span onClick={() => setSelectCategories(item)} className={`${selectCategories == item ? " opacity-100  border-b border-[#000] text-black " : "opacity-65"} text-[14px] cursor-pointer font-medium  `} key={index}> {item} </span>)
                                   }
                              </div>
                              <p className='text-[12px] font-normal  opacity-70 pt-2'>Please select</p>
                              <div className=' max-h-[250px] overflow-y-scroll py-4'>
                                   <div className=' grid md:grid-cols-2 gap-3'>
                                        {
                                             categoryData?.map((item, index) => <div onClick={() => setSelectBrand({ selectBrand, ...item })} className=' w-full' key={index}>
                                                  <label className=' flex   items-center gap-2 ' htmlFor="">
                                                       <p className=' bg-[#F5F5F5] h-[15px] w-[15px] border border-[#c4c3c3]  flex items-center justify-center'>   {selectBrand == item ? <span className='bg-[#000] h-[7px] w-[7px] block'></span> : null}  </p>
                                                       <div className='flex gap-1 items-center'>
                                                            {item?.category?.map((category, index) => (
                                                                 <p className='text-[13px] text-color' key={index}>{category} </p>
                                                            ))}
                                                       </div>

                                                  </label>
                                             </div>)
                                        }
                                   </div>
                              </div>

                         </div>
                         <div className='  relative min-h-[150px] border border-dotted rounded-md p-3 w-full'>
                              {/* show select category  */}
                              <div className=' inline-block m-2'>
                                   <div className=' flex items-center gap-1  hover:border-l hover:border-t hover:border-[#0000007b]  duration-300 rounded bg-[#f5f5f5] p-2  '> <p className='text-[14px] font-normal'>Abysse</p>
                                        <p className='  cursor-pointer text:[#3e3d3d3b] '><IoClose size={20} /> </p>
                                   </div>
                              </div>
                              <div className=' inline-block m-2'>
                                   <div className=' flex items-center gap-1  hover:border-l hover:border-t hover:border-[#0000007b]  duration-300 rounded bg-[#f5f5f5] p-2  '> <p className='text-[14px] font-normal'>Clothing</p>
                                        <p className='  cursor-pointer text:[#3e3d3d3b] '><IoClose size={20} /> </p>
                                   </div>
                              </div>
                              <div className=' inline-block m-2'>
                                   <div className=' flex items-center gap-1  hover:border-l hover:border-t hover:border-[#0000007b]  duration-300 rounded bg-[#f5f5f5] p-2  '> <p className='text-[14px] font-normal'>Bags</p>
                                        <p className='  cursor-pointer text:[#3e3d3d3b] '><IoClose size={20} /> </p>
                                   </div>
                              </div>

                              <div className=' absolute    bottom-1 right-1 p-3  '>
                                   <p className='text-[14px]  font-medium secondary'> All Remove </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default KidsSwear;