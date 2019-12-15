import React from 'react'
import { LayoutMain, Button } from 'components'

const handleClick = () => {
  console.log('clicked')
}

const Home = () => (
  <LayoutMain title="Home">
    <Button onClick={handleClick}>
    Click
    </Button>
  </LayoutMain>
)

export default Home
