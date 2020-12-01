const fs = require('fs').promises;
const path = require('path');

const loadFile = async fileName => {
  const data = await fs.readFile(path.join(__dirname, fileName), 'utf-8');
  return data.split('\n').map(Number);
};

module.exports = {
  loadFile,
};
