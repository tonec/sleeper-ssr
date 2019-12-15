import React from 'react'
import { oneOfType, arrayOf, node, string, func } from 'prop-types'
import { Button as BaseButton } from 'grommet'

const propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  variant: string,
  color: string,
  onClick: func
}

const defaultProps = {
  variant: 'contained',
  color: 'primary',
  onClick: null
}

const Button = ({ variant, color, children, onClick }) => {
  return (
    <BaseButton variant={variant} color={color} onClick={onClick}>
      {children}
    </BaseButton>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
