import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, Box, Heading } from 'components'

const Header = () => (
  <AppBar position="static">
    <Box direction="row">
      <Heading level={3}>
        Sleep SSR
      </Heading>
      <Link to="/"><Button>Home</Button></Link>
      <Link to="/users"><Button>About</Button></Link>
    </Box>
  </AppBar>
)

export default Header
