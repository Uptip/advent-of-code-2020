import { run } from '../utils/index';

export const formatInput = (input: string): string[] =>
  input.replace(/\n$/, '').split('\n\n');

export const partOne = (input: string[]): number =>
  input
    .map(group => new Set(group.split('\n').join('').split('')).size)
    .reduce((total, current) => total + current, 0);

export const partTwo = (input: string[]): number => {
  return input
    .map(group => {
      const persons = group.split('\n');
      return new Set(
        [...persons.join('')].filter(
          letter =>
            persons.join('').match(new RegExp(letter, 'g')).length ===
            persons.length,
        ),
      ).size;
    })
    .reduce((total, current) => total + current, 0);
};

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  run({ pathToInput: '06/input.txt', partOne, partTwo, formatInput });
}
