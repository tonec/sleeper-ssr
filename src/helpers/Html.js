import getHead from './getHead'
import config from '../../config'

export default ({ content = '', links = '', styles = '', scripts = '', initialState = '' }) => {
  return `
    <!DOCTYPE html>
    <html lang="en-US">
      <head>
        ${getHead(config)}
        ${links}
        ${styles}
      </head>
      <body>
        <div id="content">${content}</div>
        ${initialState && `<script>window.INITIAL_STATE = ${initialState}</script>`}
        ${scripts}
      </body>
    </html>
  `
}
