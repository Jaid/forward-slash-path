import os from 'node:os'
import path from 'node:path'

import {getLocalAppdataFolder, getRoamingAppdataFolder} from 'lib/paths.js'

export const fromHome = (...segments: Array<string>) => {
  return path.join(os.homedir(), ...segments)
}

export const fromAppdataLocal = (...segments: Array<string>) => {
  const localAppDataFolder = getLocalAppdataFolder()
  const folder = path.join(localAppDataFolder, ...segments)
  return folder
}

export const fromAppdataRoaming = (...segments: Array<string>) => {
  const roamingAppDataFolder = getRoamingAppdataFolder()
  const folder = path.join(roamingAppDataFolder, ...segments)
  return folder
}

export const fromTemp = (...segments: Array<string>) => {
  const folder = path.join(os.tmpdir(), ...segments)
  return folder
}
