import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import DarkMode from './Components/DarkMode/DarkMode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <DarkMode />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Theme Toggler</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>This app working with <code>.css</code>, <code>.scss</code>, <code>.js</code> and <code>.ts</code></p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <a href="https://github.com/Avdushin" target='_blank'>github.com/Advushin</a>
    </>
  )
}

export default App
