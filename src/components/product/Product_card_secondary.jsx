"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";

const Product_card_secondary = ({ product }) => {
     const [activeImage, setActiveImage] = useState(false)
     const [activeText, setActiveText] = useState(false)
     const [heart, setHeart] = useState(false);
     var discountPrice = (product?.discount / 100) * product?.price;
     const router = useRouter()
     return (
          <div className=' w-[282.2px]  my-10'>
               <div>
                    <div onClick={() => router?.push(`/product/${product?.id}`)}  className=' relative  cursor-pointer '>
                         <div onMouseLeave={() => setActiveImage(false)} onMouseMoveCapture={() => setActiveImage(true)} className=' relative h-[376px]   overflow-hidden'>
                              {
                                   activeImage ? <Image width={100} height={100} className='   z-20  w-full   object-fill ' src={product?.image2} alt={product?.name}></Image> : <Image width={100} height={100} className=' py-16 px-10  z-50  w-full   object-fill ' src={product?.image1} alt={product?.name}></Image>
                              }
                         </div>
                         <div onMouseLeave={() => setHeart(false)} onMouseMoveCapture={() => setHeart(true)} className=' absolute top-0 z-10 p-2 rounded-[5px] hover:bg-[#F5F5F5] right-0'>
                              {
                                   heart ? <TiHeartFullOutline size={24} /> : <TiHeartOutline size={24} />
                              }
                         </div>
                        
                    </div>
                    <div onMouseEnter={() => setActiveText(true)} onMouseLeave={() => setActiveText(false)} className=' py-4 max-h-[250px] cursor-pointer'>

                         {activeText ? <div className=' pt-4 bg-white' >
                              <h1 className=' primary  text-[16px] te  font-medium'>  Available in </h1>
                              <p className='  secondary text-[16px] font-normal'> All Size Sale </p>
                         </div> : <div>
                              <p className=' text-[14px]    tracking-tight capitalize font-normal text-[#727272]'> {product?.category} </p>
                              <h1 className=' primary  text-[16px] te  font-medium'> {product?.name} </h1>
                              <p className='  secondary text-[16px] font-normal'> {product?.description} </p>
                              <div className=' pt-5 secondary '>
                                   {
                                        product?.discount ? <p>
                                             <span className=' line-through  px-1'>${product?.price} </span> <span className='px-1'>  -{product?.discount}%</span>  <span className=' text-[#e71d34]'> ${discountPrice}</span>
                                        </p> : <>  <p>${product?.price} </p></>
                                   }

                              </div>
                         </div>
                         }
                    </div>
               </div>
          </div>
     );
};

export default Product_card_secondary;