import path from 'path'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { ChunkExtractor } from '@loadable/server'
import serialize from 'serialize-javascript'
import routes from '../routes'
import Html from './Html'

export default (req, store) => {
  if (!req) return Html({})

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
  const links = extractor.getLinkTags()
  const styles = extractor.getStyleTags()
  const scripts = extractor.getScriptTags()
  const initialState = serialize(store.getState())

  return Html({ content, links, styles, scripts, initialState })
}
