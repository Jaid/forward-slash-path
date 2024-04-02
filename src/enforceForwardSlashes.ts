// From: https://github.com/sindresorhus/slash/blob/98b618f5a3bfcb5dd374b204868818845b87bb2f/index.js#L1-9
export const enforceForwardSlashes = (fileOrFolder: string) => {
  const isExtendedLengthPath = fileOrFolder.startsWith(`\\\\?\\`) // See https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#win32-file-namespaces:~:text=file%20I/O%2C-,the%20%22%5C%5C%3F%5C%22%20prefix,-to%20a%20path
  if (isExtendedLengthPath) {
    return fileOrFolder
  }
  return fileOrFolder.replaceAll(`\\`, `/`)
}
