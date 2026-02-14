import { useState, useRef, useEffect } from 'react'
import './App.css'
import confetti from 'canvas-confetti';

function App() {
  /* boolean tracker of yes/no to be my valentine */
  const [beMine, setBeMine] = useState(false);


  /* audio ref for the song */
  const audioRef = useRef(new Audio('/moshi moshi.mp3'));
  
  function cueMusic() {
    audioRef.current.loop = true; // Make it loop
    audioRef.current.play().catch(error => {
      console.log("Audio play failed:", error);
    });
  }
  const handleYesClick = () => {
  // Create a heart shape
  const scalar = 2;
  const heart = confetti.shapeFromText({ text: '❤️', scalar });

  confetti({
    shapes: [heart],
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }, // High enough to cover the screen
    scalar
  });
  cueMusic();
  fireTheHearts();
};

  function fireTheHearts() {
    // heart shape from https://thenounproject.com/icon/heart-1545381/
    const heart = confetti.shapeFromPath({
      path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
      matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333]
    });
    const defaults = {
    scalar: 2,
    spread: 180,
    particleCount: 30,
    origin: { y: -0.1 },
    startVelocity: -35
    };
    confetti({
    ...defaults,
    shapes: [heart],
    colors: ['#f93963', '#a10864', '#ee0b93']
  });
  }

  return (
    <div className="w-screen h-screen bg-pink-50 flex items-center justify-center">       
    <h1 className="text-3xl font-bold text-pink-600">
      Will you be my Valentine?
    </h1>
     {!beMine ? (<>
        <button 
          className="px-8 py-3 rose-500 text-white text-xl rounded-full"
          onClick={handleYesClick}
        >
          Yes!
        </button>
        <button 
          className="px-8 py-3 rose-500 text-white text-xl rounded-full" 
          onClick={() => setBeMine(!beMine)}
        >
          No
        </button>
      </>): (<div>
        <h2>Yay! I'm so happy!</h2>
      </div>)}
    </div>
  )
}

export default App
