import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const GameBoard = ({ cardSet }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    const initialize = () => {
      const doubled = [...cardSet, ...cardSet];
      const shuffled = shuffle(doubled).map((content, index) => ({ id: index, content }));
      setCards(shuffled);
      setFlipped([]);
      setMatched([]);
      setScore(0);
      setCorrect(0);
      setIncorrect(0);
    };
    initialize();
  }, [cardSet]);

  const handleClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].content === cards[second].content) {
        setMatched([...matched, first, second]);
        setScore((s) => s + 1);
        setCorrect((c) => c + 1);
        setTimeout(() => setFlipped([]), 800);
      } else {
        setIncorrect((i) => i + 1);
        setTimeout(() => setFlipped([]), 600);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex mb-4 text-lg font-medium border-2 border-amber-400 w-full justify-between">
        <div > Score:{score}</div>
        <div > Correct:{correct} </div> 
        <div > Incorrect:{incorrect}</div>
      </div>

      <div>
         <button onClick={() => window.location.reload()} className="ml-4 px-3 py-1 bg-red-500
          text-white rounded hover:bg-red-600 mb-3">Reset Game</button>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, index) => (
          <Cards 
            key={index}
            content={card.content}
            isFlipped={flipped.includes(index) || matched.includes(index)}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      
    </div>
  );
};

export default GameBoard;