"use  client"
import { filterCategory } from '@/utils/filter/filter_category';
import Filter_category_sub from '../FilterBox/filter_category_sub';

const Mobile_category = () => {
     return (
          <div>
               <div>
                    {filterCategory?.map((item, index) => <Filter_category_sub item={item} key={index} />)}
               </div>
          </div>
     );
};

export default Mobile_category;