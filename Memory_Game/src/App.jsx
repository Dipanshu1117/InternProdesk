import React, { useState } from 'react';
import GameBoard from './component/GameBoard';
import Controls from './component/Controls';
import { animalCards } from './Data';
import { symbolCards } from './Data';
import { foodCards } from './Data';

const App = () => {
  const [selectedType, setSelectedType] = useState('animals');

  const getCards = () => {
    switch (selectedType) {
      case 'symbols': return symbolCards;
      case 'foods': return foodCards;
      default: return animalCards;
    }
  };

  return (
    <div className="flex flex-col items-center py-6 text-center bg-gray-400 h-157">
      <h1 className='text-3xl font-bold mb-4'>Memory Game</h1>
      <Controls onSelectType={setSelectedType} />
      <GameBoard key={selectedType} cardSet={getCards()} />
    </div>
  );
};

export default App;
