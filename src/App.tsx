import { useState } from 'react'

import './App.css'

function App() {
  /* boolean tracker of yes/no to be my valentine */
  const [beMine, setBeMine] = useState(false)

  return (
    <>
    <h1>Will you be my Valentine?</h1>
      <button onClick={() => setBeMine(!beMine)}>
        {beMine ? "Yes!" : "No"}
      </button>
    </>
  )
}

export default App
