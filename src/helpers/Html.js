import serialize from 'serialize-javascript'
import getHead from './getHead'

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
