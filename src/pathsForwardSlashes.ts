import {cleanPath} from 'src/cleanPath.js'

import * as paths from './paths.js'

export const fromHome: typeof paths['fromHome'] = (...segments) => {
  const result = paths.fromHome(...segments)
  const resultNormalized = cleanPath(result)
  return resultNormalized
}

export const fromAppdataLocal: typeof paths['fromAppdataLocal'] = (...segments) => {
  const result = paths.fromAppdataLocal(...segments)
  const resultNormalized = cleanPath(result)
  return resultNormalized
}

export const fromAppdataRoaming: typeof paths['fromAppdataRoaming'] = (...segments) => {
  const result = paths.fromAppdataRoaming(...segments)
  const resultNormalized = cleanPath(result)
  return resultNormalized
}

export const fromTemp: typeof paths['fromTemp'] = (...segments) => {
  const result = paths.fromTemp(...segments)
  const resultNormalized = cleanPath(result)
  return resultNormalized
}

export * from './paths.js'
