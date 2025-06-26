import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Money Management</h2>
      <div className="text-sm text-gray-500">Test-Account | test@gmail.com</div>
    </header>
  );
};

export default Header;