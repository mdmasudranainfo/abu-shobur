"use client"

import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

const Filter_category_sub = ({ item }) => {
     const [activeSub, setActiveSub] = useState(false)
     return (
          <div>
               <div className='  my-[2x]' >
                    <div onClick={() => setActiveSub(!activeSub)} className='hover:bg-[#F5F5F5]  text-start px-2  py-[10px] duration-150 cursor-pointer'>
                         <p className='text-[15px] capitalize'> {item?.name} </p>
                    </div>

                    <div className=' ml-3'>
                         <Collapse isOpened={activeSub}>
                              {activeSub ? <div>
                                   {item?.sub?.map((item, index) => <div key={index} className='hover:bg-[#F5F5F5]  text-start px-2  py-[10px] duration-150 cursor-pointer'>
                                        <label className='flex items-center gap-2 ' htmlFor={item?.name}>
                                              <input className='' type="checkbox"  name="" id={item?.name} />
                                              <p className='text-[15px] capitalize'> {item?.name} </p>
                                        </label>
                                        
                                   </div>)
                                   }</div> : null}
                         </Collapse>
                    </div>
               </div>
          </div>
     );
};

export default Filter_category_sub;