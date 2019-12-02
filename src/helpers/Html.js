import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import get from 'lodash/get'
import getAssets from './getAssets'
import routes from '../routes'

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={{}}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )

  console.log('assets', getAssets())

  const bundle = get(getAssets(), 'main.js')

  if (!bundle) {
    console.log('No bundle file found.')
  }

  return `
    <html>
      <head></head>
      <body>
        <div id="content">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="${bundle}"></script>
      </body>
    </html>
  `
}
