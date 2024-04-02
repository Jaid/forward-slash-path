import {strict as assert} from 'node:assert'
import {test} from 'node:test'

import {getMainModule} from 'zeug'

type MainModule = typeof import('forward-slash-path')
const path = await getMainModule<MainModule>(`forward-slash-path`)
const exampleFile = `C:\\Program Files\\Hello World\\index.js`
const exampleFolder = `C:\\Program Files\\Hello World`
const exampleName = `index.test.js`
test(`enforceForwardSlashes`, async () => {
  const result = path.enforceForwardSlashes(exampleFile)
  assert.equal(result, `C:/Program Files/Hello World/index.js`)
})
test(`hasSlash`, async () => {
  const result = path.hasSlash(exampleFile)
  assert.equal(result, true)
})
test(`extra/isName`, async () => {
  const result = path.isName(exampleFile)
  assert.equal(result, false)
  const result2 = path.isName(exampleName)
  assert.equal(result2, true)
})
test(`extra/withoutExtension`, async () => {
  const result = path.withoutExtension(exampleFile)
  assert.equal(result, `C:/Program Files/Hello World/index`)
})
test(`extra/fileNameWithoutExtension`, async () => {
  const result = path.fileNameWithoutExtension(exampleFile)
  assert.equal(result, `index`)
})
test(`extra/getExtension`, async () => {
  const result = path.getExtension(exampleFile)
  assert.equal(result, `js`)
})
test(`extra/getIndexBeforeExtension`, async () => {
  const result = path.getIndexBeforeExtension(exampleFile)
  assert.equal(result, 34)
})
test(`extra/getIndexAfterParent`, async () => {
  const result = path.getIndexAfterParent(exampleFile)
  assert.equal(result, 29)
})
test(`extra/getIndexBeforeName`, async () => {
  const result = path.getIndexBeforeName(`C:/a`)
  assert.equal(result, 3)
  const result2 = path.getIndexBeforeName(exampleFile)
  assert.equal(result2, 29)
})
test(`extra/isDotFile`, async () => {
  const result = path.isDotFile(exampleFile)
  assert.equal(result, false)
  const result2 = path.isDotFile(`.gitignore`)
  assert.equal(result2, true)
  const result3 = path.isDotFile(`.git/config`)
  assert.equal(result3, false)
  const result4 = path.isDotFile(`C:/.test`)
  assert.equal(result4, true)
})
test(`extra/addSuffix`, async () => {
  const result = path.addSuffix(exampleFile, `.suffix`)
  assert.equal(result, `C:/Program Files/Hello World/index.suffix.js`)
})
test(`extra/addPrefix`, async () => {
  const result = path.addPrefix(exampleFile, `prefix-`)
  assert.equal(result, `C:/Program Files/Hello World/prefix-index.js`)
})
test(`extra/replaceExtension`, async () => {
  const result = path.replaceExtension(exampleFile, `ts`)
  assert.equal(result, `C:/Program Files/Hello World/index.ts`)
  const result2 = path.replaceExtension(exampleFolder, `ts`)
  assert.equal(result2, `C:/Program Files/Hello World.ts`)
  const result3 = path.replaceExtension(exampleFile, `js`)
  assert.equal(result3, undefined)
})
