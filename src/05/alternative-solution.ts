import { run, range } from '../utils/index';

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
      !input.includes(id) && input.includes(id - 1) && input.includes(id + 1),
  );

/* istanbul ignore next */
export const runAlternative = (pathToInput: string): Promise<void> =>
  run({
    pathToInput,
    partOne,
    partTwo,
    formatInput,
    comment: 'alt',
  });
