import path from 'node:path'
import {fileURLToPath} from 'node:url'

export const folderFromUrl = (url: Parameters<typeof fileURLToPath>[0]) => {
  const file = fileURLToPath(url)
  return path.dirname(file)
}
