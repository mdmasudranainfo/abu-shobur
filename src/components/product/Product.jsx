
import React from 'react';
import Product_card_primary from './Product_card_primary';
import { products } from '@/utils/product';

const Product = () => {

     
     return (
          <div className='  py-20 '>

               <div className=' w-full'>
                    
                    <div className=' grid  sm:grid-cols-2  justify-items-center  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4   sm:gap-2 md:gap-6 '>
                         {
                               products?.map((product,index)=> <Product_card_primary product={product}  key={index} />)
                         }
                    </div>
               </div>
                 
          </div>
     );
};

export default Product;