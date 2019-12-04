import path from 'path'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { ChunkExtractor } from '@loadable/server'
import serialize from 'serialize-javascript'
import getHead from './getHead'
import routes from '../routes'
import config from '../../config'

export default (req, store) => {
  const statsFile = path.resolve(__dirname, '../public/dist/loadable-stats.json')
  const extractor = new ChunkExtractor({ statsFile })

  const jsx = extractor.collectChunks(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={{}}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )

  const content = renderToString(jsx)

  return `
    <!DOCTYPE html>
    <html lang="en-US">
      <head>
        ${getHead(config)}
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
      </head>
      <body>
        <div id="content">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `
}
