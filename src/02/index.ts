import { run } from '../utils/index';

type Entry = {
  digitOne: number;
  digitTwo: number;
  letter: string;
  password: string;
};

export const formatInput = (input: string): Entry[] =>
  input
    .split('\n')
    .filter(Boolean)
    .map(line => {
      const [rule, password] = line.split(': ');
      const [digits, letter] = rule.split(' ');
      const [digitOne, digitTwo] = digits
        .split('-')
        .map(Number)
        .filter(Boolean);

      return {
        digitOne,
        digitTwo,
        letter,
        password,
      };
    });

export const partOne = (input: Entry[]): number =>
  input.filter(({ digitOne, digitTwo, letter, password }) => {
    const regEx = new RegExp(letter, 'gi');
    const occurencesCount = (password.match(regEx) || []).length;
    return occurencesCount >= digitOne && occurencesCount <= digitTwo;
  }).length;

export const partTwo = (input: Entry[]): number =>
  input.filter(({ digitOne, digitTwo, letter, password }) => {
    return (
      (password.charAt(digitOne - 1) === letter) !==
      (password.charAt(digitTwo - 1) === letter)
    );
  }).length;

if (process.env.NODE_ENV !== 'test') {
  run({ pathToInput: '02/input.txt', partOne, partTwo, formatInput });
}
