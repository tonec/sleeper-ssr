import path from 'path'
import { ChunkExtractor } from '@loadable/server'

export default () => {
  const statsFile = path.resolve(__dirname, '../public/dist/loadable-stats.json')
  const extractor = new ChunkExtractor({ statsFile })

  return {
    scripts: extractor.getScriptTags(),
    styles: extractor.getStyleTags(),
    links: extractor.getLinkTags()
  }
}
