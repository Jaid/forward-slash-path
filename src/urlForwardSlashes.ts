import {cleanPath} from 'src/cleanPath.js'

import * as urlUtil from './url.js'

export const folderFromUrl: typeof urlUtil['folderFromUrl'] = url => {
  const result = urlUtil.folderFromUrl(url)
  const resultNormalized = cleanPath(result)
  return resultNormalized
}

export * from './url.js'
