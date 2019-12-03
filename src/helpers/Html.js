import serialize from 'serialize-javascript'

const getMeta = meta => {
  return meta.reduce((acc, tag) => {
    if (tag.name) {
      return `${acc}<meta name="${tag.name}" content="${tag.content}" />\n`
    }
    if (tag.property) {
      return `${acc}<meta property="${tag.property}" content="${tag.content}" />\n`
    }
    return acc
  }, '')
}

const getHead = app => {
  return `
    <head>
      <title>${app.title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      ${getMeta(app.head.meta)}
    </head>
  `
}

export default (content, bundle, store, config) => {
  return `
    <html>
      ${getHead(config.app)}
      <body>
        <div id="content">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="${bundle}"></script>
      </body>
    </html>
  `
}
