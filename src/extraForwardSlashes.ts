import {enforceForwardSlashes} from 'src/enforceForwardSlashes.js'
import * as extra from 'src/extra.js'

export const withoutExtension: typeof extra['withoutExtension'] = fileOrFolder => {
  const fileOrFolderNormalized = enforceForwardSlashes(fileOrFolder)
  return extra.withoutExtension(fileOrFolderNormalized)
}
export const addSuffix: typeof extra['addSuffix'] = (fileOrFolder, suffix) => {
  const fileOrFolderNormalized = enforceForwardSlashes(fileOrFolder)
  return extra.addSuffix(fileOrFolderNormalized, suffix)
}
export const addPrefix: typeof extra['addPrefix'] = (fileOrFolder, prefix) => {
  const fileOrFolderNormalized = enforceForwardSlashes(fileOrFolder)
  return extra.addPrefix(fileOrFolderNormalized, prefix)
}
export const replaceExtension: typeof extra['replaceExtension'] = (fileOrFolder, newExtension) => {
  const fileOrFolderNormalized = enforceForwardSlashes(fileOrFolder)
  return extra.replaceExtension(fileOrFolderNormalized, newExtension)
}
export const replaceStem: typeof extra['replaceStem'] = (fileOrFolder, newStem) => {
  const fileOrFolderNormalized = enforceForwardSlashes(fileOrFolder)
  return extra.replaceStem(fileOrFolderNormalized, newStem)
}

export * from 'src/extra.js'
