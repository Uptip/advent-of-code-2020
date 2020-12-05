import { promises as fs } from 'fs';
import path from 'path';

export const loadFile = async (fileName: string): Promise<string> => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, '..', fileName),
      'utf-8',
    );
    return data;
  } catch (err) {}
};

export const range = (size: number): number[] => [...Array(size).keys()];

/* istanbul ignore next */
export const run = async ({ pathToInput, formatInput, partOne, partTwo }) => {
  const fileContent = await loadFile(pathToInput);
  const input = formatInput(fileContent);

  console.time('Total time');

  console.time('Part one time');
  console.log('Answer one is', partOne(input));
  console.timeEnd('Part one time');

  console.log('—');

  console.time('Part two time');
  console.log('Answer two is', partTwo(input));
  console.timeEnd('Part two time');

  console.log('—');
  console.timeEnd('Total time');
};
