"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const YourWishListCart = ({ product }) => {
     const [activeImage, setActiveImage] = useState(false)

     const router = useRouter()
     return (
          <div className=' max-w-[100%]'>
               <div>
                    <div onClick={() => router.push(`/product/${product?.id}`)} onMouseLeave={() => setActiveImage(false)} onMouseMoveCapture={() => setActiveImage(true)} className=' relative  cursor-pointer '>
                         <div className=' relative h-[276px]   overflow-hidden transition-all duration-300'>
                              {
                                   activeImage ? <Image width={100} height={100} className='   z-20  w-full   object-fill ' src={product?.image2} alt={product?.name}></Image> : <Image width={100} height={100} className=' py-16 px-10  z-50  w-full   object-fill ' src={product?.image1} alt={product?.name}></Image>
                              }
                         </div>
                         <div className=' bg-[#efefef3a]  absolute top-0 w-full h-full'>
                         </div>
                    </div>
                    <div className=' py-4'>
                         <h1 className=' primary  text-[17px]    font-medium'> {product?.name} </h1>
                         <p className='   text-[14px] font-normal'> {product?.description} </p>
                         <div className=' pt-5   secondary'>
                              <p> ${product?.price} </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default YourWishListCart;