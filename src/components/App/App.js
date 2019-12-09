import React, { Component } from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'

const Logo = loadable(() => import('../Logo/Logo'))

class App extends Component {
  static propTypes = {
    location: object.isRequired
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
    return (
      <div>
        <Logo />
        <h1>App u likes</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">About</Link></li>
        </ul>
        <button type="button" onClick={this.handleClick}>
        Click me
        </button>
      </div>
    )
  }
}

export default App
