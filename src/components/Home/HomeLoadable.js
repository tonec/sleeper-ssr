import React from 'react'
import loadable from '@loadable/component'

const Home = loadable(() => import('./Home'))

function HomeLoadable() {
  return (
    <div>
      <Home />
    </div>
  )
}

export default HomeLoadable
