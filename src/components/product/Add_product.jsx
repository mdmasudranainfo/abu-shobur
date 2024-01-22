"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiCircleQuestion } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti';
import image  from "../../../public/images/category/destination.jpeg"
import productImage  from "../../../public/images/product/somle.webp"

const Add_product = () => {

     const [heart, setHeart] = useState(false)
     return (
          <div>
               <div className=' lg:pt-10'>
                    <div>
                         <div className=' border-b border-[#aca2a2d7] py-3 flex flex-wrap justify-between items-center gap-2'>
                              <div className=' flex items-center gap-2'>
                                   <Image className='w-[18px] h-[18px] object-fill rounded-full' src={image} alt='image'></Image>
                                   <p className=' text-[15px] text-color  font-normal'>Sending from   <span className='font-bold'>Netherlands</span></p>
                              </div>
                              <div className=' flex items-center gap-2 md:gap-11'>
                                   <p className='text-[14px] text-color'>You may have to pay import duties</p>
                                   <CiCircleQuestion size={19} />
                              </div>
                         </div>
                         <div className='   grid grid-cols-3 md:grid-cols-4  relative    gap-3 py-4'>
                              <div className=' col-span-1 md:col-span-1 w-full'>
                                   <Image className=' max-h-[250px]' src={productImage} alt='product'></Image>
                              </div>
                              <div className=' col-span-2 md:col-span-3 flex flex-col md:flex-row gap-2 w-full '>
                                   <div className=' w-full'>
                                        <p className=' text-[14px]    tracking-tight capitalize font-normal text-[#727272]'> New session </p>

                                        <h4 className=' py-1 text-[16px] font-medium primary'>Jacquemus</h4>
                                        <p className='text-[15px] text-color'>Le Petit Tourni bucket bag</p>
                                        <p className='text-[15px] text-color'>onedrob ID: 22242446</p>
                                   </div>
                                   <div className=' w-full'>
                                        <h2 className='text-[16px] font-semibold'>$1,347     </h2>
                                   </div>
                                   <div className=' w-full'>
                                        <span className=' text-[14px]    tracking-tight capitalize font-normal text-[#727272]'>Size</span>

                                        <p className=' py-1 text-[16px] font-medium primary'>One Size</p>
                                        <p className=' pt-2 text-[15px] text-color'>Quantity</p>
                                        <div className=' flex items-center gap-2'>
                                             <p>1</p>
                                             <Link className='text-[13px] underline  hover:text-[#00000080] text-end font-normal secondary' href={`/product/id`}> Change</Link>
                                        </div>
                                        <div onMouseLeave={() => setHeart(false)} onMouseMoveCapture={() => setHeart(true)} className=' group   flex items-center gap-2 pt-4'>
                                             {
                                                  heart ? <TiHeartFullOutline className='group-hover:text-[#00000080]' size={24} /> : <TiHeartOutline size={24} />
                                             }
                                             <Link className='text-[14px] group-hover:text-[#00000080]   secondary font-normal' href={'/wislist'}>Move to wishlist</Link>
                                        </div>
                                   </div>

                              </div>
                              <div className=' absolute top-3 cursor-pointer  duration-150 right-3 hover:bg-[#F5F5F5] p-[2px] rounded-sm'>
                                   <IoMdClose size={24} />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Add_product;