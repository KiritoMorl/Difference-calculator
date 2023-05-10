import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const fileExt = ['.json', '.yml'];
const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutPath(filepath), 'utf-8');
const resultStylish = readFile('__fixtures__/result_stylish.txt');
const resultPlain = readFile('__fixtures__/result_plain.txt');

test.each(fileExt)('testing different file options', (extension) => {
  const fileBefore = `__fixtures__/file1${extension}`;
  const fileAfter = `__fixtures__/file2${extension}`;
  const actual1 = genDiff(fileBefore, fileAfter, 'stylish');
  expect(actual1).toEqual(resultStylish);
  const actual2 = genDiff(fileBefore, fileAfter, 'plain');
  expect(actual2).toEqual(resultPlain);
  const actual4 = genDiff(fileBefore, fileAfter);
  expect(actual4).toEqual(resultStylish);
});
