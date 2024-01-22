import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import React from 'react';

const layout = ({ children }) => {

     return (
          <div className='container'>
               <div className=' px-5 py-10'>
                    <div className=' flex justify-start gap-5'>
                          <DashboardSidebar></DashboardSidebar>
                         <div className=' px-2 w-full min-h-[60vh]'>
                              {children}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default layout;