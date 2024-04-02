import {enforceForwardSlashes} from 'src/enforceForwardSlashes.js'
import * as extra from 'src/extra.js'

const withoutExtension = (fileOrFolder: string) => {
  const fileOrFolderNormalized = enforceForwardSlashes(fileOrFolder)
  return extra.withoutExtension(fileOrFolderNormalized)
}
const addSuffix = (fileOrFolder: string, suffix: string) => {
  const fileOrFolderNormalized = enforceForwardSlashes(fileOrFolder)
  return extra.addSuffix(fileOrFolderNormalized, suffix)
}
const addPrefix = (fileOrFolder: string, prefix: string) => {
  const fileOrFolderNormalized = enforceForwardSlashes(fileOrFolder)
  return extra.addPrefix(fileOrFolderNormalized, prefix)
}
const replaceExtension = (fileOrFolder: string, newExtension: string) => {
  const fileOrFolderNormalized = enforceForwardSlashes(fileOrFolder)
  return extra.replaceExtension(fileOrFolderNormalized, newExtension)
}
const replaceStem = (fileOrFolder: string, newStem: string) => {
  const fileOrFolderNormalized = enforceForwardSlashes(fileOrFolder)
  return extra.replaceStem(fileOrFolderNormalized, newStem)
}

export {addPrefix, addSuffix, replaceExtension, replaceStem, withoutExtension}
export * from 'src/extra.js'
