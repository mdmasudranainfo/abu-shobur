import { trending_product } from '@/utils/trending_product';
import Image from 'next/image';
import React from 'react';

const Trending = () => {
     return (
          <div className=' px-1 md:px-2  py-10 '>

               <h1 className='text-2xl  secondary font-medium text-center my-4'  >Trending now</h1>
               <div className=' pt-10'>


                    <div className=' md:grid md:grid-cols-2 justify-between  items-center  lg:grid-cols-4  md:gap-3 xl:gap-4'>
                         {
                              trending_product?.map((item, index) => <div className='  cursor-pointer' key={index}>

                                   <div>
                                        <div className='h-[376px]'>
                                             <Image className='w-full h-full' src={item?.image} alt='image'></Image>
                                        </div>
                                        <div className=' pt-4'>

                                             <h3 className='text-[14px] uppercase font-normal  secondary'> {item?.name} </h3>
                                             <p className='text-[14px]  capitalize font-normal  secondary'> {item?.description} </p>
                                        </div>
                                   </div>
                              </div>)
                         }
                    </div>

               </div>
          </div>
     );
};

export default Trending;