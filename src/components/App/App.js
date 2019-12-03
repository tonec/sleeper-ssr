import React, { Component } from 'react'
import { objectOf, any } from 'prop-types'
import { Link } from 'react-router-dom'
import { Logo } from 'components'

class App extends Component {
  static propTypes = {
    location: objectOf(any).isRequired
  }

  componentDidUpdate(prevProps) {
    const { location: { pathname } } = this.props
    const { location: { pathname: prevPathname } } = prevProps

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
