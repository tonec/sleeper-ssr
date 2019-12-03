import serialize from 'serialize-javascript'

export default (content, bundle, store) => {
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
