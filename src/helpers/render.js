import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Html from './Html'
import routes from '../routes'

export default (req, store) => {
  return (
    <Html store={store}>
      <Provider store={store}>
        <StaticRouter location={req.originalUrl} context={{}}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    </Html>
  )
}
