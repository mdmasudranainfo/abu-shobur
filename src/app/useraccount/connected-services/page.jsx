import CommonTitle from '@/components/dashboard/CommonTitle';
import MyAccount from '@/components/dashboard/MyAccount';
import React from 'react';
import { FaRegCircleQuestion } from "react-icons/fa6";

const page = () => {
     return (
          <div>
                <MyAccount />
               <CommonTitle text={"Connected services"}></CommonTitle>

               <div className=' py-2  md:px-10 lg:px-20'>

                    <div className=' flex  items-center gap-7 justify-center flex-col'>
                         <div>
                              <FaRegCircleQuestion size={24} />
                         </div>
                         <div className=' text-center'>
                              <h1 className='text-[17px] font-medium  primary  '>Apps with access to your ONEDROB account</h1>
                              <p className=' text-[14px] text-color font-normal my-3'>Here you will be able to manage the access to your Onedrob account by sites and apps that you grant access to your account information. Right now, it looks like you don’t have any sites or apps linked to your Onedrob account data.</p>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default page;