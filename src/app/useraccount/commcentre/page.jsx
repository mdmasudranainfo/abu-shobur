"use client"

import CommonTitle from '@/components/dashboard/CommonTitle';
import MyAccount from '@/components/dashboard/MyAccount';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoIosArrowUp } from 'react-icons/io';

const Page = () => {
     let languages = [
          "English (American)",
          "French",
          "German",
          "Russian",
          "Portuguese (Brazilian)",
          "Spanish (Latin American)",
          "Chinese (Simplified)",
          "Danish",
          "Italian",
          "Japanese",
          "Korean",
          "Dutch",
          "Spanish (European)",
          "Swedish",
          "English (British)",
          "Arabic",
          "Chinese (Traditional)"
     ];
     const [selectLanguage, setSelectLanguage] = useState("English (American)")
     const [showSelectionOption, setShowSelectionOption] = useState(false)
     return (
          <div>
               <MyAccount />
               <CommonTitle text={"Communication preferences"}></CommonTitle>

               <div>
                    <div>
                         <h1 className='text-[17px]  font-medium   secondary my-1'>Language</h1>
                         <p className='text-[15px]  font-normal text-color'>Select the language you’d like to receive your ONEDROB communication</p>
                    </div>
                    <div>
                         <div className='  relative  max-w-[450px] py-3  '>
                              <div className='w-full border  bg-white max-w-[450px]    z-30 absolute border-[#2e2e2eaf] rounded-md   '>
                                   <div onClick={() => setShowSelectionOption(!showSelectionOption)} className='p-2 flex justify-between items-center gap-3 cursor-pointer'>
                                        <h1> {selectLanguage} </h1>
                                        <div>
                                             <IoIosArrowUp
                                                  className={`${showSelectionOption ? '' : "rotate-180"}   text-colo duration-500`}
                                                  size={20}
                                             />
                                        </div>
                                   </div>
                                   <Collapse isOpened={showSelectionOption}>
                                        {
                                             showSelectionOption ? <div className=' max-h-[350px] overflow-y-scroll  bg-white border border-[#d8d2d26f]  py-2'>
                                                  {
                                                       languages?.map((item, index) => <p onClick={() => { setSelectLanguage(item), setShowSelectionOption(false) }} key={index} className='hover:bg-[#F5F5F5] w-full flex justify-between items-center cursor-pointer  px-3  duration-200  secondary p-[9px] '> {item} </p>)
                                                  }
                                             </div> : null
                                        }
                                   </Collapse>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Page;