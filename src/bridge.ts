import type {FormatInputPathObject, ParsedPath} from 'node:path'

import path from 'node:path'

import {enforceForwardSlashes} from 'src/enforceForwardSlashes.js'

export const normalize = (fileOrFolder: string): string => {
  return enforceForwardSlashes(path.normalize(fileOrFolder))
}
export const join = (...pathSegments: Array<string>): string => {
  return enforceForwardSlashes(path.join(...pathSegments))
}
export const resolve = (...pathSegments: Array<string>): string => {
  return enforceForwardSlashes(path.resolve(...pathSegments))
}
export const isAbsolute = (fileOrFolder: string): boolean => {
  fileOrFolder = enforceForwardSlashes(fileOrFolder)
  return path.isAbsolute(fileOrFolder)
}
export const relative = (from: string, to: string): string => {
  return enforceForwardSlashes(path.relative(from, to))
}
export const dirname = (fileOrFolder: string): string => {
  return enforceForwardSlashes(path.dirname(fileOrFolder))
}
export const basename = (fileOrFolder: string, suffix?: string): string => {
  return enforceForwardSlashes(path.basename(fileOrFolder, suffix))
}
export const extname = (fileOrFolder: string): string => {
  return enforceForwardSlashes(path.extname(fileOrFolder))
}
export const parse = (fileOrFolder: string): ParsedPath => {
  const data = path.parse(fileOrFolder)
  data.root = enforceForwardSlashes(data.root)
  data.dir = enforceForwardSlashes(data.dir)
  data.base = enforceForwardSlashes(data.base)
  data.ext = enforceForwardSlashes(data.ext)
  data.name = enforceForwardSlashes(data.name)
  return data
}
export const format = (fileOrFolderObject: FormatInputPathObject): string => {
  return enforceForwardSlashes(path.format(fileOrFolderObject))
}
export const toNamespacedPath = (fileOrFolder: string): string => {
  return enforceForwardSlashes(path.toNamespacedPath(fileOrFolder))
}
