import {cleanPath} from 'src/enforceForwardSlashes.js'
import * as lib from 'src/lib.js'

type Path = ((fileOrFolder: string) => string) & typeof lib

const path = Object.assign(cleanPath, lib) as Path
export default path
export * from 'src/lib.js'
export {cleanPath, path}
