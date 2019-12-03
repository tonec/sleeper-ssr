import React, { Component } from 'react'
import { array } from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { provideHooks } from 'redial'
import { fetchUsers } from 'redux/modules/user/actions'

class Users extends Component {
  static propTypes = {
    users: array
  }

  static defaultProps = {
    users: []
  }

  renderUsers() {
    const { users } = this.props

    return users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">About</Link>
          </li>
        </ul>
        <h1>Users list:</h1>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapState = ({ user }) => ({ users: user })

export const hooks = {
  fetch: ({ store }) => {
    return store.dispatch(fetchUsers())
  }
}

export default compose(
  provideHooks(hooks),
  connect(mapState)
)(Users)
