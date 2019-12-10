import React, { Component } from 'react'
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'

const Logo = loadable(() => import('./components/Logo/Logo'))

class App extends Component {
  static propTypes = {
    location: object.isRequired,
    route: object.isRequired
  }

  componentDidUpdate(prevProps) {
    const { pathname: prevPathname } = prevProps.location
    const { location: { pathname } } = this.props

    if (pathname !== prevPathname) {
      window.scrollTo(0, 0)
    }
  }

  handleClick = () => {
    console.log('clicked')
  }

  render() {
    const { route } = this.props

    return (
      <div>
        <Logo />
        <h1>App u likes</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">About</Link></li>
        </ul>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

export default App
