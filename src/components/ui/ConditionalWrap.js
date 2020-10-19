import React from 'react'
import PropTypes from 'prop-types'

function ConditionalWrap({ condition, wrap, children }) {
  return condition ? wrap(children) : <>{children}</>
}

ConditionalWrap.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrap: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default ConditionalWrap
