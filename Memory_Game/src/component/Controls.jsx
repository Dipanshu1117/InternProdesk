import React from 'react';

const Controls = ({ onSelectType }) => {
    
  return (
    <div className='flex gap-4 mb-4'>
      <button onClick={() => onSelectType('animals')} className='border hover:cursor-pointer rounded-2xl mr-2 w-20 bg-amber-400 font-bold  '>Animals</button>
      <button onClick={() => onSelectType('symbols')} className='border hover:cursor-pointer rounded-2xl mr-2 w-20 bg-amber-400 font-bold'>Symbols</button>
      <button onClick={() => onSelectType('foods')} className='border hover:cursor-pointer rounded-2xl mr-2 w-20 bg-amber-400 font-bold'>Foods</button>
    </div>
  );
};

export default Controls;
