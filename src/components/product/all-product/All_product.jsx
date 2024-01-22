import { products } from '@/utils/product';
import React from 'react';
import Product_card_secondary from '../Product_card_secondary';

const All_product = () => {
     return (
          <div>
               <div className=' pt-10 '>

                    <div className=' w-full'>
                         <div className=' grid  sm:grid-cols-2  justify-items-center  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4   sm:gap-2 md:gap-6 '>
                              {
                                   products?.map((product, index) => <Product_card_secondary product={product} key={index} />)
                              }
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default All_product;