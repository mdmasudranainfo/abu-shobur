import React from 'react';

const Input = ({ name, type, placeholder }) => {
     return (
          <div className=' w-full'>

               <input className="  w-full rounded-[8px] border outline-1 outline-[#000000e1]  border-[#3331318c] py-2 px-3" type={type} name={name} id="" placeholder={placeholder} />
          </div>
     );
};

export default Input;