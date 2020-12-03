import { loadFile } from '../utils/index';

export const formatInput = (input: string): Array<string> => input.split('\n');

type TobboganSlope = {
  right: number;
  down: number;
  input: Array<string>;
};

const getEncouteredTreesCount = ({
  right,
  down,
  input,
}: TobboganSlope): number => {
  const size = input[0].length;
  let currentRow = 0;
  let currentColumn = 0;
  let viewedCells = [];

  while (currentRow < input.length) {
    viewedCells.push(input[currentRow][currentColumn % size]);
    currentRow += down;
    currentColumn += right;
  }

  return viewedCells.filter(cell => cell === '#').length;
};

export const partOne = (input: Array<string>): number =>
  getEncouteredTreesCount({ input, right: 3, down: 1 });

export const partTwo = (input: Array<string>): number =>
  getEncouteredTreesCount({ input, right: 1, down: 1 }) *
  getEncouteredTreesCount({ input, right: 3, down: 1 }) *
  getEncouteredTreesCount({ input, right: 5, down: 1 }) *
  getEncouteredTreesCount({ input, right: 7, down: 1 }) *
  getEncouteredTreesCount({ input, right: 1, down: 2 });

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  (async () => {
    const fileContent = await loadFile('03/input.txt');
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
  })();
}
