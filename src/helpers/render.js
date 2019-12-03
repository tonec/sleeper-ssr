import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import get from 'lodash/get'
import Html from './Html'
import getAssets from './getAssets'
import routes from '../routes'

export default (req, store) => {
  const bundle = get(getAssets(), 'main.js', null)

  if (!bundle) {
    console.log('No bundle file found.')
  }

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={{}}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )

  return Html(content, bundle, store)
}
