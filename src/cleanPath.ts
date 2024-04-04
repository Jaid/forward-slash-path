// From: https://github.com/sindresorhus/slash/blob/98b618f5a3bfcb5dd374b204868818845b87bb2f/index.js#L1-9
export const enforceForwardSlashes = (fileOrFolder: string) => {
  const isExtendedLengthPath = fileOrFolder.startsWith(`\\\\?\\`) // See https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#win32-file-namespaces:~:text=file%20I/O%2C-,the%20%22%5C%5C%3F%5C%22%20prefix,-to%20a%20path
  if (isExtendedLengthPath) {
    return fileOrFolder.replaceAll(`/`, `\\`)
  }
  return fileOrFolder.replaceAll(`\\`, `/`)
}

export const cleanPath = (fileOrFolder: string) => {
  let result = enforceForwardSlashes(fileOrFolder)
  // Check if first symbol is a lowercase letter
  const firstSymbol = result[0]
  const isFirstSymbolLowercase = firstSymbol >= `a` && firstSymbol <= `z`
  if (isFirstSymbolLowercase) {
    if (result.startsWith(`${firstSymbol}:/`)) {
      result = `${firstSymbol.toUpperCase()}:/${result.slice(3)}`
    }
  } else if (result.length >= 4) {
    const driveSymbol = result[4]
    const isDriveSymbolLowercase = driveSymbol >= `a` && driveSymbol <= `z`
    if (isDriveSymbolLowercase) {
      if (result.startsWith(`\\\\?\\${driveSymbol}:\\`)) {
        result = `\\\\?\\${driveSymbol.toUpperCase()}:${result.slice(6)}`
      }
    }
  }
  return result
}
