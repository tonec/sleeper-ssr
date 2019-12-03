import React from 'react'
import { oneOfType, arrayOf, node, object } from 'prop-types'
import serialize from 'serialize-javascript'
import get from 'lodash/get'
import getAssets from './getAssets'

const propTypes = {
  store: object.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
}

const Html = ({ store, children }) => {
  const bundle = get(getAssets(), 'main.js')

  if (!bundle) {
    console.log('No bundle file found.')
  }

  /* eslint-disable react/no-danger */
  return (
    <html lang="en-US">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="EventHive" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="EventHive" />
        <meta name="theme-color" content="#3677dd" />
      </head>
      <body>
        <div id="content">{children}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.INITIAL_STATE = ${serialize(store.getState())};`
          }}
          charSet="UTF-8"
        />
        <script src={bundle} />
      </body>
    </html>
  )
}

Html.propTypes = propTypes

export default Html
