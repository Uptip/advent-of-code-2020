'use strict';

const fs = jest.createMockFromModule('fs');

let mockFiles = {};
const __setMockFiles = newMockFiles => {
  mockFiles = {};
  for (const file in newMockFiles) {
    mockFiles[file] = newMockFiles[file];
  }
};

const readFile = pathToFile => {
  return mockFiles[pathToFile];
};

fs.__setMockFiles = __setMockFiles;
fs.promises = { readFile };

module.exports = fs;
