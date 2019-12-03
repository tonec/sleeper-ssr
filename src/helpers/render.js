import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Html from './Html'
import getAssets from './getAssets'
import routes from '../routes'
import config from '../../config'

export default (req, store) => {
  const assets = getAssets()

  if (!assets) {
    console.log('No assets files found.')
  }

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={{}}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )

  return Html(content, assets, store, config)
}
