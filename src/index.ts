import type {Simplify} from 'type-fest'

import * as bridge from 'src/bridge.js'
import {enforceForwardSlashes} from 'src/enforceForwardSlashes.js'
import * as extra from 'src/extraForwardSlashes.js'

type Path = {
  (fileOrFolder: string): string
} & Simplify<typeof bridge> & Simplify<typeof extra>

const path = Object.assign(enforceForwardSlashes, bridge, extra) as Path
export default path
export * from 'src/bridge.js'
export * from 'src/extraForwardSlashes.js'
export {enforceForwardSlashes, path}
