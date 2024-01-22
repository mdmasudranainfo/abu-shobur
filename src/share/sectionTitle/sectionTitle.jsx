import Link from 'next/link';
import React from 'react';

const SectionTitle = ({title,action}) => {
     return (
          <div>
               <div className=' flex justify-between  gap-4 flex-wrap items-center'>
                    <h1 className=' text-[22px] font-normal text-color  leading-tight tracking-tighter'> {title} </h1>
                    <div>
                         <Link href={'/product'} className=' py-[6px] px-[12px]  text-color  hover:bg-[#F5F5F5] font-bold border border-[#222] rounded-[8px]'> {action} </Link>
                    </div>
               </div>
          </div>
     );
};

export default SectionTitle;