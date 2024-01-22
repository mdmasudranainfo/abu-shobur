"use client"
import CommonTitle from '@/components/dashboard/CommonTitle';
import MyAccount from '@/components/dashboard/MyAccount';
import KidsSwear from '@/components/dashboard/comms-preferences/KidsSwear';
import MenSwear from '@/components/dashboard/comms-preferences/MenSwear';
import WomenSwear from '@/components/dashboard/comms-preferences/WomenSwear';
import React, { useState } from 'react';

const Page = () => {
     const [activeCategory, setActiveCategory] = useState(1);
     const [activeRouter, setActiveRouter] = useState(1)
     return (
          <div>
                <MyAccount />
               <CommonTitle text={'Shopping preferences'}></CommonTitle>

               <div>
                    <div>
                         <p className='text-[12px] font-normal'>I am most interested in</p>
                    </div>

                    <div className=' py-3'>
                         <div className=' flex items-center gap-4'>
                              <label className='  flex items-center gap-4' htmlFor="woman">
                                   <input onChange={(e) => setActiveCategory(e.target.value)} checked={activeCategory == "Womenswear"} value={"Womenswear"} type="radio" name="woman" id="woman" />
                                   <p className='text-[13px] text-color font-normal'>Women</p>
                              </label>
                              <label className='  flex items-center gap-4' htmlFor="men">
                                   <input onChange={(e) => setActiveCategory(e.target.value)} checked={activeCategory == "menswear"} type="radio" value={"menswear"} id="men" />
                                   <p className='text-[13px] text-color font-normal'>menswear</p>
                              </label>
                              <label className='  flex items-center gap-4' htmlFor="kids">
                                   <input onChange={(e) => setActiveCategory(e.target.value)} checked={activeCategory == "kidsswear"} type="radio" value={"kidsswear"} id="kids" />
                                   <p className='text-[13px] text-color font-normal'>kidsswear</p>
                              </label>
                         </div>
                    </div>

                    <div className='  pt-10'>
                         <div className=' flex  items-center gap-4'>
                              <button onClick={() => setActiveRouter(1)} className={`${activeRouter == 1 ? "" : "opacity-55"} text-[15px] font-medium `}>Womenswear </button>
                              <button onClick={() => setActiveRouter(2)} className={`${activeRouter == 2 ? "" : "opacity-55"} text-[15px] font-medium `}>Menswear</button>
                              <button onClick={() => setActiveRouter(3)} className={`${activeRouter == 3 ? "" : "opacity-55"} text-[15px] font-medium `}>Kidswear</button>
                         </div>

                         <div className=' pt-8'>

                              {
                                   activeRouter == 1 ? <WomenSwear></WomenSwear> : activeRouter == 3 ? <MenSwear></MenSwear> : <KidsSwear></KidsSwear>
                               }

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Page;