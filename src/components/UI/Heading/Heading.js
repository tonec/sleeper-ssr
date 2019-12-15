import React from 'react'
import { oneOfType, arrayOf, node, string, number } from 'prop-types'
import { Heading as BaseHeading } from 'grommet'

const propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  level: number.isRequired,
  margin: string,
  color: string
}

const defaultProps = {
  margin: null,
  color: null
}

const Heading = ({ level, margin, color, children }) => {
  return (
    <BaseHeading level={level} margin={margin} color={color}>
      {children}
    </BaseHeading>
  )
}

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading
