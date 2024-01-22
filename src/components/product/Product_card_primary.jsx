"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";

const Product_card_primary = ({ product ,width}) => {
     const [activeImage, setActiveImage] = useState(false)
     const [heart, setHeart] = useState(false);
     var discountPrice = (product?.discount / 100) * product?.price;
     const router=useRouter()
     return (
          <div className={`${width ? width : " w-[288.2px]"} `}>
               <div>
                    <div onClick={()=>router.push(`/product/${product?.id}`)}  className=' relative  cursor-pointer '>
                         <div onMouseLeave={() => setActiveImage(false)} onMouseMoveCapture={() => setActiveImage(true)} className=' relative h-[376px]   overflow-hidden'>
                              {
                                   activeImage ? <Image width={100} height={100} className='    z-20  w-full   object-fill ' src={product?.image2} alt={product?.name}></Image> : <Image width={100} height={100} className=' py-16 px-10  z-50  w-full   object-fill ' src={product?.image1} alt={product?.name}></Image>
                              }
                         </div>
                         <div onMouseLeave={() => setHeart(false)} onMouseMoveCapture={() => setHeart(true)} className=' absolute top-0 p-3 z-20  right-0'>
                              {
                                   heart ? <TiHeartFullOutline size={24} /> : <TiHeartOutline size={24} />
                              }


                         </div>
                         {/* <div className=' bg-[#efefef3a]  absolute top-0 w-full h-full'>
                         </div> */}
                    </div>
                    <div className=' py-4'>
                         <p className=' text-[14px]    tracking-tight capitalize font-normal text-[#727272]'> {product?.category} </p>
                         <h1 className=' primary  text-[16px] te  font-medium'> {product?.name} </h1>
                         <p className='  secondary text-[16px] font-normal'> {product?.description} </p>
                         <div className=' pt-5 secondary'>
                              {
                                   product?.discount ? <p>
                                        <span className=' line-through  px-1'>${product?.price} </span> <span className='px-1'>  -{product?.discount}%</span>  <span className=' text-[#e71d34]'> ${discountPrice}</span>
                                   </p> : <>  <p>${product?.price} </p></>
                              }

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Product_card_primary;