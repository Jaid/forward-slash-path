import os from 'node:os'
import path from 'node:path'

export const getRoamingAppdataFolder = () => {
  if (process.platform === `win32`) {
    return process.env.APPDATA ?? process.env.LOCALAPPDATA ?? path.join(os.homedir(), `AppData`, `Roaming`)
  }
  if (process.platform === `darwin`) {
    return path.join(os.homedir(), `Library`, `Application Support`)
  }
  return path.join(os.homedir(), `.config`)
}

export const getLocalAppdataFolder = () => {
  if (process.platform === `win32`) {
    return process.env.LOCALAPPDATA ?? process.env.APPDATA ?? path.join(os.homedir(), `AppData`, `Local`)
  }
  if (process.platform === `darwin`) {
    return path.join(os.homedir(), `Library`, `Application Support`)
  }
  return path.join(os.homedir(), `.local`, `share`)
}
