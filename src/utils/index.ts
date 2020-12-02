import { promises as fs } from 'fs';
import path from 'path';

export const loadFile = async fileName => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, '..', fileName),
      'utf-8',
    );
    return data;
  } catch (err) {}
};
