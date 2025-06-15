import React from 'react';

const Card = ({ content, isFlipped, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-16 h-16 flex items-center justify-center bg-gray-300 rounded-lg cursor-pointer text-2xl select-none border-2"
    >
      {isFlipped ? content : '❓'}
    </div>
  );
};

export default Card;