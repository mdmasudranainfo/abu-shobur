import CommonTitle from '@/components/dashboard/CommonTitle';
import MyAccount from '@/components/dashboard/MyAccount';
import React from 'react';
const page = () => {
     return (
          <div>
               <MyAccount />
               <CommonTitle text={"Account details"}></CommonTitle>
               <div className='py-5'>

                    <div className='flex flex-col py-1 sm:flex-row gap-3 justify-center sm:justify-start   '>
                         <div className='sm:w-[200px] md:w-[250px] '>
                              <h1 className='primary text-[16px] font-medium'>First name</h1>
                         </div>
                         <div className=' w-full'>
                              <h4 className='text-[15px] secondary font-normal'> Shamim</h4>
                         </div>
                    </div>
                    <div className='flex flex-col py-1 sm:flex-row gap-3 justify-center sm:justify-start   '>
                         <div className='sm:w-[200px] md:w-[250px] '>
                              <h1 className='primary text-[16px] font-medium'>Last name</h1>
                         </div>
                         <div className=' w-full'>
                              <h4 className='text-[15px] secondary font-normal'> Hossain</h4>
                         </div>
                    </div>
                    <div className='flex flex-col py-1 sm:flex-row gap-3 justify-center sm:justify-start   '>
                         <div className='sm:w-[200px] md:w-[250px] '>
                              <h1 className='primary text-[16px] font-medium'>Email addresss</h1>
                         </div>
                         <div className=' w-full'>
                              <h4 className='text-[15px] secondary font-normal'> shamimhossain01617@gmail.com</h4>
                         </div>
                    </div>
                    <div className='flex flex-col py-1 sm:flex-row gap-3 justify-center sm:justify-start   '>
                         <div className='sm:w-[200px] md:w-[250px] '>
                              <h1 className='primary text-[16px] font-medium'>Phone number</h1>
                         </div>
                         <div className=' w-full'>
                              <h4 className='text-[15px] secondary font-normal'> +88014752144</h4>
                         </div>
                    </div>
                    <div className='flex flex-col py-1 sm:flex-row gap-3 justify-center sm:justify-start   '>
                         <div className='sm:w-[200px] md:w-[250px] '>
                              <h1 className='primary text-[16px] font-medium'>Date of birth</h1>
                         </div>
                         <div className=' w-full'>
                              <h4 className=' text-[15px]  font-normal text-red-500'> Add to unlock your Access birthday reward</h4>
                         </div>
                    </div>
                    <div className='flex flex-col py-1 sm:flex-row gap-3 justify-center sm:justify-start   '>
                         <div className='sm:w-[200px] md:w-[250px] '>
                              <h1 className='primary text-[16px] font-medium'>Gender</h1>
                         </div>
                         <div className=' w-full'>
                              <h4 className='text-[15px] secondary font-normal'>Unspecified</h4>
                         </div>
                    </div>
                    <div className='flex flex-col py-1 sm:flex-row gap-3 justify-center sm:justify-start   '>
                         <div className='sm:w-[200px] md:w-[250px] '>
                              <h1 className='primary text-[16px] font-medium'>Password</h1>
                         </div>
                         <div className=' w-full'>
                              <h4 className='text-[15px] secondary font-normal'> *****</h4>
                         </div>
                    </div>


               </div>
          </div>
     );
};

export default page;