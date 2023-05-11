import fs from 'fs';
import path from 'path';
import buildTree from './buildTree.js';
import getFormattedContent from './formatters/index.js';
import parse from './parsers.js';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const getFormat = (filename) => path.extname(filename);

const genDiff = (file1, file2, formatName = 'stylish') => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  const parsed1 = parse(data1, getFormat(file1));
  const parsed2 = parse(data2, getFormat(file2));
  const data = buildTree(parsed1, parsed2);

  return getFormattedContent(data, formatName);
};

export default genDiff;
