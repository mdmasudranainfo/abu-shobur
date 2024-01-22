import FilterBox from '@/components/filter/FilterBox/FilterBox';
import FilterTitle from '@/components/filter/FilterTitle';
import Mobile_filter from '@/components/filter/mobile-filter/Mobile_filter';
import All_product from '@/components/product/all-product/All_product';
import Recently_viewed from '@/components/product/recently-viewed/Recently_viewed';
import Recommendations from '@/components/recommendations/Recommendations';
import React from 'react';

const page = () => {

     return (
          <div>
               <div className=' container'>
                    <div className=' md:px-7 py-10'>
                         <div>
                              <FilterTitle></FilterTitle>
                         </div>
                    </div>
                    <div>
                         <FilterBox></FilterBox>
                    </div>
                    <div>
                         <All_product></All_product>
                         <Recommendations> </Recommendations>
                         <Recently_viewed> </Recently_viewed>

                    </div>
                    <div >
                         <Mobile_filter></Mobile_filter>
                    </div>
               </div>

          </div>
     );
};

export default page;