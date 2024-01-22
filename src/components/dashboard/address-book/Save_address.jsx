import React from 'react';

const Save_address = () => {
     return (
          <div>
               <div>
                    <p className='text-[14px] font-normal text-color py-1'>Your saved addresses</p>

                    <div>
                         <div className=' border border-[#2e2e2eaf] flex justify-between items-center gap-2 p-4 rounded-[5px]'>

                              <div className=' flex  items-center gap-4 md:gap-10 '>
                                   <div>
                                        <h1 className='text-[16px] font-medium text-color my-1'>Shamim Hosssin</h1>
                                   </div>
                                   <div>
                                        <h1 className='text-[16px] font-medium text-color my-1'>Natore Rajshahi</h1>
                                        <h1 className='text-[16px] font-medium text-color my-1'>5800 Natore</h1>
                                        <p className='text-[16px] font-medium text-color my-1'> Bangladesh</p>
                                   </div>
                              </div>
                              <div>
                                   <div  className='  flex gap-3 items-center  md:gap-5'>
                                        <button className='text-[16px] hover:bg-[#F5F5F5]  rounded-[5px] duration-300 font-semibold primary p-2  outline-0  border-none' >Edit</button>
                                        <button className='text-[16px] hover:bg-[#F5F5F5]  rounded-[5px] duration-300 font-semibold primary p-2  outline-0  border-none'>Delete</button>
                                   </div>
                              </div>
                         </div>
                         <div className=' py-2 flex justify-end items-center'>
                               <div className='border border-[#2e2e2eaf]  font-medium flex justify-center items-center text-[16px] hover:bg-[#F5F5F5]  text-color rounded-[5px] duration-300   py-2 px-4 '>
                                   <button>Add new Address</button>
                               </div>
                         </div>
                    </div>


               </div>
          </div>
     );
};

export default Save_address;