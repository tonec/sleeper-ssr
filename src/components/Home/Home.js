import React from 'react'

const handleClick = () => {
  console.log('clicked')
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <button type="button" onClick={handleClick}>
    Click
    </button>
  </div>
)

export default Home
