import {strict as assert} from 'node:assert'
import {test} from 'node:test'

import {getMainModule} from 'zeug'

type MainModule = typeof import('forward-slash-path')
const path = await getMainModule<MainModule>(`forward-slash-path`)
const exampleFile = `c:\\Program Files\\Hello World\\index.js`
const exampleLowLevelFile = `\\\\?\\c:\\Program Files\\Hello World\\index.js`
const exampleFolder = `C:\\Program Files\\Hello World`
const exampleName = `index.test.js`
test(`clean`, async () => {
  const result = path.cleanPath(exampleFile)
  assert.equal(result, `C:/Program Files/Hello World/index.js`)
  const result2 = path.cleanPath(exampleFolder)
  assert.equal(result2, `C:/Program Files/Hello World`)
  const result3 = path.cleanPath(exampleLowLevelFile)
  assert.equal(result3, `\\\\?\\C:\\Program Files\\Hello World\\index.js`)
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
test(`extra/stem`, async () => {
  const result = path.stem(exampleFile)
  assert.equal(result, `index`)
})
test(`extra/extension`, async () => {
  const result = path.extension(exampleFile)
  assert.equal(result, `js`)
})
test(`extra/indexBeforeExtension`, async () => {
  const result = path.indexBeforeExtension(exampleFile)
  assert.equal(result, 34)
})
test(`extra/indexAfterParent`, async () => {
  const result = path.indexAfterParent(exampleFile)
  assert.equal(result, 29)
})
test(`extra/indexBeforeName`, async () => {
  const result = path.indexBeforeName(`C:/a`)
  assert.equal(result, 3)
  const result2 = path.indexBeforeName(exampleFile)
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
test(`extra/replaceStem`, async () => {
  const result = path.replaceStem(exampleFile, `test`)
  assert.equal(result, `C:/Program Files/Hello World/test.js`)
})
test(`extra/parentName`, async () => {
  const result = path.parentName(exampleFile)
  assert.equal(result, `Hello World`)
})
test(`url/folderFromUrl`, async () => {
  const result = path.folderFromUrl(import.meta.url)
  assert.match(result, /\/test$/)
})
