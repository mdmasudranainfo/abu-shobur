import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Category_modal_single = ({ item ,setActiveSub_value, setActiveSub}) => {
    
     return (
          <div>
               <div onClick={()=>{setActiveSub(true),setActiveSub_value(item)}} className=' w-full'>
                    <div className={`hover:bg-[#F5F5F5] w-full flex justify-between items-center cursor-pointer  px-3  duration-200  secondary p-[9px] `}>
                         <div >{item?.name}</div>
                         <div className=' '>
                         <IoIosArrowForward size={24} />

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Category_modal_single;