import React from 'react'
import PropTypes from 'prop-types'
import { Heading as BaseHeading } from 'grommet'

function Heading({ children, ...rest }) {
  return <BaseHeading {...rest}>{children}</BaseHeading>
}

Heading.propTypes = {
  children: PropTypes.element.isRequired,
}

Heading.defaultProps = {}

export default Heading
