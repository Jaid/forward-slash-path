import type {FormatInputPathObject, ParsedPath} from 'node:path'

import path from 'node:path'

import {cleanPath} from 'src/enforceForwardSlashes.js'

export const normalize = (fileOrFolder: string): string => {
  return cleanPath(path.normalize(fileOrFolder))
}
export const join = (...pathSegments: Array<string>): string => {
  return cleanPath(path.join(...pathSegments))
}
export const resolve = (...pathSegments: Array<string>): string => {
  return cleanPath(path.resolve(...pathSegments))
}
export const isAbsolute = (fileOrFolder: string): boolean => {
  fileOrFolder = cleanPath(fileOrFolder)
  return path.isAbsolute(fileOrFolder)
}
export const relative = (from: string, to: string): string => {
  return cleanPath(path.relative(from, to))
}
export const dirname = (fileOrFolder: string): string => {
  return cleanPath(path.dirname(fileOrFolder))
}
export const basename = (fileOrFolder: string, suffix?: string): string => {
  return cleanPath(path.basename(fileOrFolder, suffix))
}
export const extname = (fileOrFolder: string): string => {
  return cleanPath(path.extname(fileOrFolder))
}
export const parse = (fileOrFolder: string): ParsedPath => {
  const data = path.parse(fileOrFolder)
  data.root = cleanPath(data.root)
  data.dir = cleanPath(data.dir)
  data.base = cleanPath(data.base)
  data.ext = cleanPath(data.ext)
  data.name = cleanPath(data.name)
  return data
}
export const format = (fileOrFolderObject: FormatInputPathObject): string => {
  return cleanPath(path.format(fileOrFolderObject))
}
export const toNamespacedPath = (fileOrFolder: string): string => {
  return cleanPath(path.toNamespacedPath(fileOrFolder))
}
