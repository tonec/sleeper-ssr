import fs from 'fs'
import path from 'path'

export default () => {
  const assetsPath = path.resolve(__dirname, '../assets.json')

  if (!fs.existsSync(assetsPath)) {
    return {}
  }

  const assetsJSON = fs.readFileSync(assetsPath)

  return JSON.parse(assetsJSON)
}
