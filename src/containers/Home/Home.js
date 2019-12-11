import React from 'react'
import { Meta } from 'components'

const handleClick = () => {
  console.log('clicked')
}

const Home = () => (
  <div>
    <Meta title="Home page" />
    <h2>Home</h2>
    <button type="button" onClick={handleClick}>
    Click
    </button>
  </div>
)

export default Home
