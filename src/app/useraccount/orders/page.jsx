"use client"

import CommonTitle from '@/components/dashboard/CommonTitle';
import MyAccount from '@/components/dashboard/MyAccount';


import Orders from '@/components/dashboard/orders-return/Orders';
import Return from '@/components/dashboard/orders-return/Return';
import React, { useState } from 'react';

const Page = () => {
     const [active, setActive] = useState(1)
     return (
          <div>

               <MyAccount></MyAccount>
               <div>
                    <CommonTitle text="Orders and Returns "></CommonTitle>
               </div>
               <div>
                    <div className=' flex  items-center gap-6'>
                         <div onClick={() => setActive(1)} className={` ${active == 1 ? " primary " : " text-color opacity-90"} cursor-pointer relative inline-block text-[20px] font-medium `}>
                              <p> Orders</p>
                              <div className={` ${active ==1 ? "absolute w-full h-[3px] bg-black  block" : " hidden "} `}></div>
                         </div>
                         <div onClick={() => setActive(2)} className={` ${active == 2 ? " primary " : " text-color opacity-90"} cursor-pointer  relative  inline-block text-[20px] font-medium `}>
                               <p>Returns</p>
                              <div className={` ${active ==2 ? "absolute w-full h-[3px] bg-black  block" : " hidden "} `}></div>
                         </div>

                    </div>

                    <div className='  pt-10 '>

                          {
                               active ==1 ? <Orders></Orders> : <Return setActive={setActive}></Return>
                          }

                    </div>
               </div>
          </div>
     );
};

export default Page;