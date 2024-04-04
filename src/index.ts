import {cleanPath} from 'src/cleanPath.js'
import * as lib from 'src/lib.js'

type Path = ((fileOrFolder: string) => string) & typeof lib

const path = Object.assign(cleanPath, lib) as Path
export default path
export * from 'src/lib.js'
export * from 'src/cleanPath.js'
export {path}
