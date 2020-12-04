import { run } from '../utils/index';

export const formatInput = (input: string): string[] =>
  input.split('\n').filter(Boolean);

type TobboganSlope = {
  right: number;
  down: number;
  input: string[];
};

const getEncouteredTreesCount = ({
  right,
  down,
  input,
}: TobboganSlope): number => {
  const size = input[0].length;
  let currentRow = 0;
  let currentColumn = 0;
  const visitedCells = [];

  while (currentRow < input.length) {
    visitedCells.push(input[currentRow][currentColumn % size]);
    currentRow += down;
    currentColumn += right;
  }

  return visitedCells.filter(cell => cell === '#').length;
};

export const partOne = (input: string[]): number =>
  getEncouteredTreesCount({ input, right: 3, down: 1 });

export const partTwo = (input: string[]): number =>
  getEncouteredTreesCount({ input, right: 1, down: 1 }) *
  getEncouteredTreesCount({ input, right: 3, down: 1 }) *
  getEncouteredTreesCount({ input, right: 5, down: 1 }) *
  getEncouteredTreesCount({ input, right: 7, down: 1 }) *
  getEncouteredTreesCount({ input, right: 1, down: 2 });

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  run({ pathToInput: '03/input.txt', partOne, partTwo, formatInput });
}
