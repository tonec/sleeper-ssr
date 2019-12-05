import registerSW from './registerSW'

const generateMeta = meta => {
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

export default ({ app }) => {
  return `
    <title>${app.title}</title>
    ${generateMeta(app.head.meta)}
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    ${process.env.NODE_ENV !== 'development' ? registerSW() : ''}
  `
}
