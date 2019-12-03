import serialize from 'serialize-javascript'
import getHead from './getHead'

export default (content, assets, store, config) => {
  return `
    <!DOCTYPE html>
    <html lang="en-US">
      ${getHead(config.app, assets)}
      <body>
        <div id="content">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        ${assets.scripts}
      </body>
    </html>
  `
}
