import path from 'node:path'

export const hasSlash = (fileOrFolder: string) => {
  const hasForwardSlash = fileOrFolder.includes(`/`)
  if (hasForwardSlash) {
    return true
  }
  const hasBackwardSlash = fileOrFolder.includes(`\\`)
  if (hasBackwardSlash) {
    return true
  }
  return false
}

export const isName = (fileOrFolder: string) => {
  return !hasSlash(fileOrFolder)
}

export const fileNameWithoutExtension = (fileOrFolder: string) => {
  const fileName = path.basename(fileOrFolder)
  const dotIndex = fileName.lastIndexOf(`.`)
  if (dotIndex === -1) {
    return fileName
  }
  return fileName.slice(0, dotIndex)
}

export const getExtension = (fileOrFolder: string) => {
  const fileName = path.basename(fileOrFolder)
  const dotIndex = fileName.lastIndexOf(`.`)
  if (dotIndex === -1) {
    return
  }
  return fileName.slice(dotIndex + 1)
}

export const getIndexBeforeExtension = (fileOrFolder: string) => {
  const dotIndex = fileOrFolder.lastIndexOf(`.`)
  if (dotIndex === -1) {
    return
  }
  return dotIndex
}

export const withoutExtension = (fileOrFolder: string) => {
  const indexBeforeExtension = getIndexBeforeExtension(fileOrFolder)
  if (indexBeforeExtension === undefined) {
    return fileOrFolder
  }
  return fileOrFolder.slice(0, indexBeforeExtension)
}

export const getIndexAfterParent = (fileOrFolder: string) => {
  const forwardParentIndex = fileOrFolder.lastIndexOf(`/`)
  if (forwardParentIndex !== -1) {
    return forwardParentIndex + 1
  }
  const backwardParentIndex = fileOrFolder.lastIndexOf(`\\`)
  if (backwardParentIndex !== -1) {
    return backwardParentIndex + 1
  }
}

export const getIndexBeforeName = (fileOrFolder: string) => {
  const forwardParentIndex = fileOrFolder.lastIndexOf(`/`)
  if (forwardParentIndex !== -1) {
    return forwardParentIndex + 1
  }
  const backwardParentIndex = fileOrFolder.lastIndexOf(`\\`)
  if (backwardParentIndex !== -1) {
    return backwardParentIndex + 1
  }
  return 0
}

export const isDotFile = (fileOrFolder: string) => {
  const beforeNameIndex = getIndexBeforeName(fileOrFolder)
  const firstNameCharacter = fileOrFolder[beforeNameIndex]
  return firstNameCharacter === `.`
}

export const addSuffix = (fileOrFolder: string, suffix: string) => {
  const dotIndex = getIndexBeforeExtension(fileOrFolder)
  if (dotIndex === -1) {
    return fileOrFolder + suffix
  }
  const fileBase = fileOrFolder.slice(0, dotIndex)
  const fileExtension = fileOrFolder.slice(dotIndex)
  return `${fileBase}${suffix}${fileExtension}`
}

export const addPrefix = (fileOrFolder: string, prefix: string) => {
  const beforeNameIndex = getIndexBeforeName(fileOrFolder)
  if (beforeNameIndex === 0) {
    return `${prefix}${fileOrFolder}`
  }
  const folderPart = fileOrFolder.slice(0, beforeNameIndex)
  const name = fileOrFolder.slice(beforeNameIndex)
  return `${folderPart}${prefix}${name}`
}

export const replaceExtension = (fileOrFolder: string, newExtension: string) => {
  const currentExtension = getExtension(fileOrFolder)
  if (currentExtension === undefined) {
    return `${fileOrFolder}.${newExtension}`
  }
  if (currentExtension === newExtension) {
    return
  }
  const fileBase = fileOrFolder.slice(0, -currentExtension.length)
  return `${fileBase}${newExtension}`
}
