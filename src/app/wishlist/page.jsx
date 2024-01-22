import DownloadApp from '@/components/contact/DownloadApp';
import WishlistCard from '@/components/product/wishlist/Wishlistcard';
import { products } from '@/utils/product';
import React from 'react';

const page = () => {
     return (
          <div className='container'>
               <div className=' px-3 py-5'>
                    <div>
                         <h1 className=' uppercase text-[24px] font-bold  py-1 primary'>WISHLIST</h1>
                         <p className='text-[16px]  secondary font-medium'>6 item</p>
                    </div>

                    <div className='  py-20 '>

                         <div className=' w-full'>

                              <div className=' grid  sm:grid-cols-2  justify-items-center  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4   sm:gap-2 md:gap-6 '>
                                   {
                                        products?.map((product, index) => <WishlistCard product={product} key={index} />)
                                   }
                              </div>
                         </div>

                    </div>
                    <DownloadApp></DownloadApp>
               </div>
          </div>
     );
};

export default page;