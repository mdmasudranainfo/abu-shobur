"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoIosArrowUp, IoMdClose } from 'react-icons/io';
const size = ["36 IT", "37 IT", "38 IT", "39 IT", "40 IT", "41 IT"]
const WishlistCard = ({ product }) => {
     const [activeImage, setActiveImage] = useState(false);
     const [showSelectionOption, setShowSelectionOption] = useState(false);
     const [selectSize, setSelectSize] = useState("38 IT")
     const router = useRouter()
     return (
          <div className=' w-[288.2px]'>
               <div>
                    <div onClick={() => router.push(`/product/${product?.id}`)}  className=' relative  cursor-pointer '>
                         <div onMouseLeave={() => setActiveImage(false)} onMouseMoveCapture={() => setActiveImage(true)} className=' relative h-[376px]  transition-all duration-200  overflow-hidden'>
                              {
                                   activeImage ? <Image width={100} height={100} className=' z-20  w-full   object-fill ' src={product?.image2} alt={product?.name}></Image> : <Image width={100} height={100} className=' py-16 px-10  z-50  w-full   object-fill ' src={product?.image1} alt={product?.name}></Image>
                              }
                         </div>
                         <div className=' absolute  z-10 p-2 rounded-[5px] hover:bg-[#F5F5F5]  right-0 top-0'>
                              <IoMdClose size={24} />
                         </div>
                         
                    </div>
                    <div className=' py-4'>
                         <p className=' text-[14px]    tracking-tight capitalize font-normal text-[#727272]'> {product?.category} </p>
                         <h1 className=' primary  text-[16px]  font-medium'> {product?.name} </h1>
                         <p className='  secondary text-[16px] font-normal'> {product?.description} </p>
                         <div className=' pt-5 secondary'>
                              <p>${product?.price} </p>
                         </div>
                    </div>
                    <div className=' flex flex-col gap-2'>
                         <div className='  relative  bg-white h-[45px] '>
                              {/* <p className='text-[17px] font-medium text-center secondary'>One Size available</p> */}
                              <div className='w-full border  bg-white   z-20 absolute border-stone-800 rounded-md   '>
                                   <div onClick={() => setShowSelectionOption(!showSelectionOption)} className='p-2 flex justify-between items-center gap-3 cursor-pointer '>
                                        <h1> {selectSize} </h1>
                                        <div>
                                             <IoIosArrowUp
                                                  className={`${showSelectionOption ? '' : "rotate-180"}   text-colo duration-500`}
                                                  size={20}
                                             />
                                        </div>
                                   </div>
                                   <Collapse isOpened={showSelectionOption}>
                                        {
                                             showSelectionOption ? <> <p className='text-[15px]  font-normal p-2'>Select size (Rick Owens Italy)</p>  <div className='  bg-white border border-[#d8d2d26f] py-2'>

                                                  {
                                                       size?.map((item, index) => <p onClick={() => { setSelectSize(item), setShowSelectionOption(false) }} key={index} className='hover:bg-[#F5F5F5] w-full flex justify-between items-center cursor-pointer  px-3  duration-200  secondary p-[9px] '> {item} </p>)
                                                  }
                                             </div>  </> : null
                                        }
                                   </Collapse>
                              </div>
                         </div>

                         <div className=''>

                              <button className=' block w-full px-2 py-2 hover:bg-[#F5F5F5] duration-200 rounded-lg  border border-[#9f9797] gap-2'> <span className='text-[16px] font-semibold  primary'>Add To Bag</span> </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default WishlistCard;