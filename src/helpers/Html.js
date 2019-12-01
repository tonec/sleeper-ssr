import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import routes from '../routes'

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={{}}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head></head>
      <body>
        <div id="content">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="main.js"></script>
      </body>
    </html>
  `
}
