import Product_card_primary from '@/components/product/Product_card_primary';
import SectionTitle from '@/share/sectionTitle/sectionTitle';
import { products } from '@/utils/product';
import React from 'react';

const Best_sale = () => {
     return (
          <div className=' pt-20'>
               <div>
                    <SectionTitle title="Best Sale" action={"Shop new"}></SectionTitle>
               </div>
               <div className=' pt-10 '>
                    <div className=''>
                         {/* product components  */}
                         <div className='  grid  sm:grid-cols-2  justify-items-center  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4   sm:gap-2 md:gap-6  '>
                              {products?.map((product, index) => <Product_card_primary product={product} key={index} />)
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Best_sale;