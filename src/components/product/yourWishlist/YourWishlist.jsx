

import YourWishListCart from './YourWishListCart';
import { products } from '@/utils/product';

import Link from 'next/link';
const YourWishlist = () => {

     
     return (
          <div className='container'>
            




               <div className='  max-w-[1100px] mx-auto py-2'>

                    <div>

                         <div className='  text-center  py-5'>
                              <h1 className='text-[22px]   font-medium secondary'>FROM YOUR WISHLIST</h1>
                              <p className='text-[15px] font-normal primary py-1'>There s more waiting for you... <Link className='  underline hover:text-[#000000ae]' href={'/'}> Go to wishlis</Link> </p>
                         </div>

                         <div>
                              <div className=' pt-10 '>
                                   <div className=' px-20'>
                                      
                                        <div className='  grid  
                                         sm:grid-cols-2     items-start md:grid-cols-4     sm:gap-3   '>
                                             {products?.slice(0,4).map((product, index) => <YourWishListCart product={product} key={index} />)
                                             }
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default YourWishlist;