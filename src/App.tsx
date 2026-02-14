import { useState, useRef } from 'react'
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
  setBeMine(true); // Success! :D
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
    <div className="w-screen h-screen bg-pink-50 flex flex-col items-center justify-center">       
<div style={{ width: '300px', height: '300px', position: 'relative' }}>
    <iframe
      src="https://giphy.com/embed/vDhDcIEmShbUI"
      width="100%"
      height="100%"
      style={{ position: 'absolute', pointerEvents: 'none', border: '1px solid', borderRadius: '10px' }}
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
    ></iframe>
  </div>    <h1 className="text-3xl font-bold text-pink-600">
      Will you be my Valentine? 🌹
    </h1>
     {!beMine ? (
      <div className="flex flex-row gap-4 py-5">
        <button 
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
          onClick={handleYesClick}
        >
          Yes!
        </button>
        <button 
          className="bg-gray-300 text-white px-4 py-2 rounded hover:bg-gray-400 transition-colors"
          onClick={() => setBeMine(!beMine)}
        >
          No.
        </button>
      </div>
    ) : (
    <div>
        <h2>Yay! I'm so happy!</h2>
      </div>)}
    </div>
  )
}

export default App
