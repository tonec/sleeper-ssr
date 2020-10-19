import React from 'react'
import PropTypes from 'prop-types'
import { Box, Meta, Header } from 'components'

const LayoutMain = ({ children, title }) => (
  <div>
    <Meta title={title} />
    <Header />
    <Box>{children}</Box>
  </div>
)

LayoutMain.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
}

LayoutMain.defaultProps = {
  title: null,
}

export default LayoutMain
