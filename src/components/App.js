import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'

const App = () => {
  return (
    <div>
      <Logo />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">About</Link>
        </li>
      </ul>
      <h1>App u likes</h1>
      <button
        type="button"
        onClick={() => console.log('clicked')}
      >
        Click me
      </button>
    </div>
  )
}

export default App
