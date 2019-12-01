import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Sub extends Component {
  render() {
    return (
      <p>Sub</p>
    )
  }
}

export default withRouter(Sub)
