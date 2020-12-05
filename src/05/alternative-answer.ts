import { run, range } from '../utils/index';

const isInArray = (haystack: number[], needle: number): boolean =>
  haystack.indexOf(needle) > -1;

export const formatInput = (input: string): number[] =>
  input
    .split('\n')
    .filter(Boolean)
    .map(boardingPass =>
      boardingPass
        .split('')
        .map(char => (['F', 'L'].includes(char) ? '0' : '1'))
        .join(''),
    )
    .map(binaryString => parseInt(binaryString, 2));

export const partOne = (input: number[]): number => Math.max(...input);

export const partTwo = (input: number[]): number =>
  range(partOne(input)).find(
    id =>
      isInArray(input, id) &&
      isInArray(input, id - 1) &&
      isInArray(input, id + 1),
  );

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  run({ pathToInput: '05/input.txt', partOne, partTwo, formatInput });
}
