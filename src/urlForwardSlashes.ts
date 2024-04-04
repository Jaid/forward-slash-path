import {enforceForwardSlashes} from 'src/enforceForwardSlashes.js'

import * as urlUtil from './url.js'

export const folderFromUrl = (url: Parameters<typeof urlUtil['folderFromUrl']>[0]) => {
  const result = urlUtil.folderFromUrl(url)
  const resultNormalized = enforceForwardSlashes(result)
  return resultNormalized
}
