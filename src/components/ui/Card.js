import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'components'

function Card({ children }) {
  return (
    <Box background="light-1" pad="medium">
      {children}
    </Box>
  )
}

Card.propTypes = {
  children: PropTypes.element,
}

export default Card
