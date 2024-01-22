import React from 'react';
import destinationImage from "../../../../public/images/category/destination.jpeg"
import Image from 'next/image';
import Link from 'next/link';

const Destination = () => {
     return (
          <div className='container'>

               <div className=' py-20 px-2'>
                    <Link href={'/'} className='  '>
                         <div className='w-full lg:max-w-[50%]'>
                              <Image src={destinationImage} alt='destination'></Image>
                         </div>
                         <div className=' py-3 w-full lg:max-w-[50%]'>
                              <h1 className=' text-[17px]  font-medium uppercase text-color '>DESTINATION: SKI</h1>
                              <p className=' text-[15px] font-normal text-color'>Pure pro, keen amateur or all about the après — shop everything you need for the slopes in one place</p>
                         </div>
                    </Link>

               </div>

          </div>
     );
};

export default Destination;